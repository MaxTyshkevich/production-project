import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileSchema } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';

const data = {
    username: 'admin',
    age: 22,
    country: Country.Ukraine,
    lastname: 'ulbi tv',
    first: 'asd',
    city: 'asf',
    currency: Currency.USD,
};

describe('profileSlice test', () => {
    test('test set readonly', () => {
        const state:DeepPartial<ProfileSchema> = {
            readonly: false,
        };

        expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({
            readonly: true,
        });
    });
});
