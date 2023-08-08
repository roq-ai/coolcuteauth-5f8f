import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface SecuritySettingInterface {
  id?: string;
  password_policy: string;
  mfa: boolean;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface SecuritySettingGetQueryInterface extends GetQueryInterface {
  id?: string;
  password_policy?: string;
  user_id?: string;
}
