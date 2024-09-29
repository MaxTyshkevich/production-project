import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { Profile } from '../types/profile';
import { getProfile } from './getProfile';

describe('seceltor getProfile', () => {
    test('should return profile', () => {
        const data: DeepPartial<Profile> = {
            username: 'admin',
            age: 22,
            country: Country.Ukraine,
            lastname: 'ulbi tv',
            first: 'asd',
            city: 'asf',
            currency: Currency.USD,
        };

        const profile = {
            readonly: true,
            isLoading: false,
            error: undefined,
            data,
            form: data,

        };

        const state: DeepPartial<StateSchema> = {
            profile,
        };

        expect(getProfile(state as StateSchema)).toEqual(profile);
    });

    test('work with empty state', () => {
        const defaultPrpfile = {
            readonly: true,
            isLoading: false,
            error: undefined,
            data: undefined,
            form: undefined,
        };
        const state: DeepPartial<StateSchema> = {

        };

        expect(getProfile(state as StateSchema)).toEqual(defaultPrpfile);
    });
});
