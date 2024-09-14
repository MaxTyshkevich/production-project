import {
    ReduxStoreWithManager,
    StateSchemaKey,
} from 'app/providers/StoreProvider/config/StateSchema';
import {
    ReactNode, useEffect, useState,
} from 'react';
import { useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';
import { ReducersList } from './LoginForm';

 interface WrapProps {
    initialReducers: ReducersList;
    children: ReactNode
}

type ReducersListEntry = [StateSchemaKey, Reducer]

export const Wrap = ({ initialReducers, children }: WrapProps) => {
    const store = useStore() as ReduxStoreWithManager;
    const [isReducerReady, setIsReducerReady] = useState(false);
    useEffect(() => {
        Object.entries(initialReducers).forEach(([name, reducer]: ReducersListEntry) => {
            store.reducerManager.add(name, reducer);
            console.log('dowload');
        });
        setIsReducerReady(true);
        return () => {
            Object.entries(initialReducers).forEach(([name]: ReducersListEntry) => {
                store.reducerManager.remove(name);
                console.log('distroy');
            });
            setIsReducerReady(false);
        };
    }, [initialReducers, store.reducerManager]);

    if (!isReducerReady) {
        return null;
    }

    return <div>{children}</div>;
};
