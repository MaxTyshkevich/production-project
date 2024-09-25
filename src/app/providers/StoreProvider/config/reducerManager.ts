import {
    AnyAction,
    CombinedState,
    combineReducers, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import {
    StateSchemaKey, StateSchema, ReducerManager,
} from './StateSchema';

// eslint-disable-next-line max-len
export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>): ReducerManager {
    const reducers = { ...initialReducers };

    let combinedReducer = combineReducers(reducers);

    let keysToRemove: StateSchemaKey[] = [];

    return {
        getReducerMap: () => reducers,
        reduce: (state: StateSchema, action: AnyAction):CombinedState<StateSchema> => {
            if (keysToRemove.length > 0) {
                // eslint-disable-next-line no-param-reassign
                state = { ...state };
                keysToRemove.forEach((key) => {
                    delete state![key];
                });
                keysToRemove = [];
            }
            return combinedReducer(state, action);
        },

        // Adds a new reducer with the specified key
        add: (key: StateSchemaKey, reducer: Reducer) => {
            if (!key || reducers![key]) {
                return;
            }

            // Add the reducer to the reduce    r mapping
            reducers![key] = reducer;

            // Generate a new combined reducer
            combinedReducer = combineReducers(reducers);
        },

        // Removes a reducer with the specified key
        remove: (key: StateSchemaKey) => {
            if (!key || !reducers![key]) {
                return;
            }

            // Remove it from the reducer mapping
            delete reducers[key];

            // Add the key to the list of keys to clean up
            keysToRemove.push(key);

            // Generate a new combined reducer
            combinedReducer = combineReducers(reducers);
        },
    };
}
