export type { UserSchema, User } from './modal/types/userSchema';
export {
    getUserRole,
    isUserAdmin,
    isUserManager,
} from './modal/selector/getUserRole/getRole';

export { getUserAuthData } from './modal/selector/getUserAuthData/getUserAuthData';
export { UserRole } from './modal/consts/userConst';
export { userReducer, userActions } from './modal/slice/userSlice';
