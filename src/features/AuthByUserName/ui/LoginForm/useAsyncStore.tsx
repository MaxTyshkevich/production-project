import {
    ReduxStoreWithManager,
    StateSchemaKey,
} from 'app/providers/StoreProvider/config/StateSchema';
import { useEffect, useState } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';
import { ReducersList } from './LoginForm';

type useAsyncStoreProps ={
  initialReducers: ReducersList
}

type ReducersListEntry = [StateSchemaKey, Reducer]

export function useAsyncStore({ initialReducers }: useAsyncStoreProps) {
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        Object.entries(initialReducers).forEach(([name, reducer]: ReducersListEntry) => {
            store.reducerManager.add(name, reducer);
        });

        return () => {
            Object.entries(initialReducers).forEach(([name]: ReducersListEntry) => {
                store.reducerManager.remove(name);
                console.log('distroy');
            });
        };
    }, [initialReducers, store.reducerManager]);
}
