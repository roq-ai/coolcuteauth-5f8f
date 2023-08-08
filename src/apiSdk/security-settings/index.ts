import axios from 'axios';
import queryString from 'query-string';
import { SecuritySettingInterface, SecuritySettingGetQueryInterface } from 'interfaces/security-setting';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getSecuritySettings = async (
  query?: SecuritySettingGetQueryInterface,
): Promise<PaginatedInterface<SecuritySettingInterface>> => {
  const response = await axios.get('/api/security-settings', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createSecuritySetting = async (securitySetting: SecuritySettingInterface) => {
  const response = await axios.post('/api/security-settings', securitySetting);
  return response.data;
};

export const updateSecuritySettingById = async (id: string, securitySetting: SecuritySettingInterface) => {
  const response = await axios.put(`/api/security-settings/${id}`, securitySetting);
  return response.data;
};

export const getSecuritySettingById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/security-settings/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteSecuritySettingById = async (id: string) => {
  const response = await axios.delete(`/api/security-settings/${id}`);
  return response.data;
};
