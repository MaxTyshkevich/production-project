import React, { Suspense, useCallback, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';
import { RequireAuth } from './RequireAuth';

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const { path, element, authOnly } = route;

        const Element = (
            <Suspense fallback={<PageLoader />}>
                <div className="page-wrapper">
                    {element}
                </div>
            </Suspense>
        );
        return (
            <Route
                key={path}
                path={path}
                element={authOnly ? (
                    <RequireAuth>
                        {Element}
                    </RequireAuth>
                ) : Element}
            />
        );
    }, []);

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    );
};

export default AppRouter;
