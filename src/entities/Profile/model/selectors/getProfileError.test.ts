import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('seceltor getProfileData', () => {
    test('shold return error', () => {
        const error = 'something wrong';

        const state: DeepPartial<StateSchema> = {
            profile: {
                error,
            },
        };

        expect(getProfileError(state as StateSchema)).toEqual(error);
    });

    test('work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
        };

        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
});
