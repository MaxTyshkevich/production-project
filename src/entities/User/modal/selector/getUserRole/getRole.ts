import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { UserRole } from '../../consts/userConst';

export const getUserRole = (state: StateSchema) => state.user.authData?.roles;

export const isUserAdmin = createSelector(getUserRole, (roles) => roles?.includes(UserRole.ADMIN));
export const isUserManager = createSelector(getUserRole, (roles) => roles?.includes(UserRole.MANAGER));
