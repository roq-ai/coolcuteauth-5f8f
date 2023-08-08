import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AuditLogInterface {
  id?: string;
  user_id?: string;
  activity: string;
  timestamp?: any;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface AuditLogGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  activity?: string;
}
