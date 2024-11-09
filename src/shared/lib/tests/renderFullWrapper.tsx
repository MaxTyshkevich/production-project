import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { AppRouter } from 'app/providers/router';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from 'shared/config/i18n/i18nForTests';
import { render } from '@testing-library/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ReducersMapObject } from '@reduxjs/toolkit';

interface ConfigWrapper {
    routes?: string[]
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export function componentRender(component: ReactNode, config: ConfigWrapper = {}) {
    const {
        routes = ['/'],
        initialState,
        asyncReducers,
    } = config;
    return render(
        <MemoryRouter initialEntries={routes}>
            <StoreProvider initialState={initialState} asyncReducers={asyncReducers}>
                <AppRouter />
                <I18nextProvider i18n={i18nForTests}>
                    {component}
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>,
    );
}
