import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('seceltor getProfileIsLoading', () => {
    test('should return form', () => {
        const isLoading = true;

        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading,
            },
        };

        expect(getProfileIsLoading(state as StateSchema)).toEqual(isLoading);
    });

    test('work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
        };

        expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined);
    });
});
