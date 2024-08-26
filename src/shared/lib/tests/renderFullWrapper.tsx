import React, { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { AppRouter } from 'app/providers/router';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from 'shared/config/i18n/i18nForTests';
import { render } from '@testing-library/react';

interface ConfigWrapper {
    routes?: string[]
}

export function componentRender(component: ReactNode, config: ConfigWrapper = { routes: ['/'] }) {
    return render(
        <MemoryRouter initialEntries={config.routes}>
            <AppRouter />
            <I18nextProvider i18n={i18nForTests}>
                {component}
            </I18nextProvider>
        </MemoryRouter>,
    );
}