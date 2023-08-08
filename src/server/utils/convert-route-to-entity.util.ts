const mapping: Record<string, string> = {
  'audit-logs': 'audit_log',
  organizations: 'organization',
  'security-settings': 'security_setting',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
