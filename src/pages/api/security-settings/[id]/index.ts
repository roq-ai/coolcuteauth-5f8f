import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { securitySettingValidationSchema } from 'validationSchema/security-settings';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.security_setting
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getSecuritySettingById();
    case 'PUT':
      return updateSecuritySettingById();
    case 'DELETE':
      return deleteSecuritySettingById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getSecuritySettingById() {
    const data = await prisma.security_setting.findFirst(convertQueryToPrismaUtil(req.query, 'security_setting'));
    return res.status(200).json(data);
  }

  async function updateSecuritySettingById() {
    await securitySettingValidationSchema.validate(req.body);
    const data = await prisma.security_setting.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteSecuritySettingById() {
    const data = await prisma.security_setting.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
