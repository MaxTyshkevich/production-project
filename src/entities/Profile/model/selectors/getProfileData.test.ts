import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { Profile, ProfileSchema } from '../types/profile';
import { getProfileData } from './getProfileData';

describe('seceltor getProfileData', () => {
    test('should return prifle', () => {
        const data: DeepPartial<Profile> = {
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
                data,
            },
        };

        expect(getProfileData(state as StateSchema)).toEqual(data);
    });

    test('work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {

            },
        };

        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
