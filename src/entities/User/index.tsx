export {
    getUserRole,
    isUserAdmin,
    isUserManager,
} from './modal/selector/getUserRole/getRole';

export { getUserAuthData } from './modal/selector/getUserAuthData/getUserAuthData';

export type { UserSchema, User } from './modal/types/userSchema';
export { UserRole } from './modal/types/userSchema';
export { userReducer, userActions } from './modal/slice/userSlice';
