import * as yup from 'yup';

export const auditLogValidationSchema = yup.object().shape({
  activity: yup.string().required(),
  timestamp: yup.date().required(),
  user_id: yup.string().nullable(),
});
