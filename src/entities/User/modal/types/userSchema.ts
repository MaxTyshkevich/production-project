export interface User {
  id: number;
  username: string;
  password?:string;
  avatar?: string;
}

export interface UserSchema {
  authData?: User

  _inited: boolean
}
