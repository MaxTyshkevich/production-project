import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter/modal/slice/counterSlice';
import { userReducer } from 'entities/User';
import { StateSchema } from './StateSchema';

export const createReduxStore = (initialState?: StateSchema) => {
    const rootReducers = combineReducers({
        counter: counterReducer,
        user: userReducer,
    });

    return configureStore({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,

    });
};
