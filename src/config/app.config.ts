interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: [],
  tenantRoles: ['Administrator', 'Regular User'],
  tenantName: 'Organization',
  applicationName: 'CoolCuteAuth',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
