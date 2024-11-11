import { UserRole } from '../consts/userConst';

export interface User {
  id: string;
  username: string;
  password?:string;
  avatar?: string;
  roles?: UserRole [];
}

export interface UserSchema {
  authData?: User
  _inited: boolean
}
