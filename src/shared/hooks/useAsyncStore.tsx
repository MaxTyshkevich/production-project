import {
    ReduxStoreWithManager,
    StateSchemaKey,
} from 'app/providers/StoreProvider/config/StateSchema';
import { useEffect } from 'react';
import { useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
}
type useAsyncStoreProps ={
    initialReducers: ReducersList
    removeAfterUnmount?: boolean;
  }

export function useAsyncStore({ initialReducers, removeAfterUnmount = false }: useAsyncStoreProps) {
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useAppDispatch();

    useEffect(() => {
        /*   store.reducerManager.getReducerMap(); */
        const reducers = Object.keys(store.reducerManager.getReducerMap());

        Object.entries(initialReducers).forEach(([name, reducer]) => {
            if (!reducers.find((reducerName) => reducerName === name)) {
                store.reducerManager.add(name as keyof ReducersList, reducer);
                dispatch({ type: `@INIT ${name} reducer` });
            }
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(initialReducers).forEach(([name]) => {
                    store.reducerManager.remove(name as keyof ReducersList);
                });
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}
