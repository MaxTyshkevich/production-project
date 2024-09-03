import { FC } from 'react';
import { Provider } from 'react-redux';

import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';

interface StoreProviderProps {

    initialState?: any;
}

export const StoreProvider: FC<StoreProviderProps> = ({ children, initialState }) => {
    const store = createReduxStore(initialState as StateSchema);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
