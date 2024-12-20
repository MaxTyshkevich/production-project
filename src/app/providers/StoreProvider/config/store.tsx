import {
    AnyAction,
    CombinedState, configureStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter/modal/slice/counterSlice';
import { userReducer } from 'entities/User';
import { $api } from 'shared/api/api';
import { NavigateOptions, To } from 'react-router-dom';
import { scrollReducer } from 'features/ScrollPage';
import { rtkApi } from 'shared/api/rtkApi';
import { ReduxStoreWithManager, StateSchema, ThunkExtraArg } from './StateSchema';
import { createReducerManager } from './reducerManager';

export const createReduxStore = (
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    navigate?: (to: To, options?: NavigateOptions) => void,
) => {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
        scrollPages: scrollReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
    };
    const reducerManager = createReducerManager(rootReducers);

    const extraArg: ThunkExtraArg = {
        api: $api,
        navigate,
    };
    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>, AnyAction>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            },
        }).concat(rtkApi.middleware),

    });

    (store as ReduxStoreWithManager).reducerManager = reducerManager;
    return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
