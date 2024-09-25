import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { userActions } from 'entities/User';
import { loginByUsername, LoginByUsernameProps } from './LoginByUsername';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername.test', () => {
    let dispatch: Dispatch;
    let getState: () => StateSchema;

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
    });

    test('fullfiled', async () => {
        const userValue = {
            id: 1,
            username: 'user',
            password: '123',
        };
        mockedAxios.post.mockReturnValue(Promise.resolve({
            data: userValue,
        }));

        const inputData:LoginByUsernameProps = { username: 'user', password: '123' };

        const action = await loginByUsername(inputData);

        const result = await action(dispatch, getState, undefined);

        expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userValue);
    });

    test('rejected', async () => {
        const error = {
            message: 'User not found',
        };
        mockedAxios.post.mockReturnValue(Promise.resolve({
            data: error,
        }));

        const inputData:LoginByUsernameProps = { username: 'user', password: '123' };

        const action = await loginByUsername(inputData);

        const result = await action(dispatch, getState, undefined);

        expect(mockedAxios.post).toHaveBeenCalled();

        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(error);
    });

    test('error login', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const action = loginByUsername({ username: '123', password: '123' });
        const result = await action(dispatch, getState, undefined);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
    });
});
