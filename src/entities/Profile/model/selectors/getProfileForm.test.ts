import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileError } from './getProfileError';
import { getProfileForm } from './getProfileForm';

describe('seceltor getProfileForm', () => {
    test('should return form', () => {
        const data = {
            username: 'admin',
            age: 22,
            country: Country.Ukraine,
            lastname: 'ulbi tv',
            first: 'asd',
            city: 'asf',
            currency: Currency.USD,
        };

        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data,
            },
        };

        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });

    test('work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
        };

        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
