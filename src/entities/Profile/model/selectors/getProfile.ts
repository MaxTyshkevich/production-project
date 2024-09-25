import { StateSchema } from 'app/providers/StoreProvider';

export const getProfile = (state: StateSchema) => state.profile || {
    readonly: true,
    isLoading: false,
    error: undefined,
    data: undefined,
};
