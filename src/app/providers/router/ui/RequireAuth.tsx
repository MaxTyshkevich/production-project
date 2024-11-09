import { getUserRole, UserRole } from 'entities/User';
import { getUserAuthData } from 'entities/User/modal/selector/getUserAuthData/getUserAuthData';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export function RequireAuth({ children, roles }: { children: JSX.Element, roles?: UserRole[] }) {
    const isAuth = useSelector(getUserAuthData);
    const userRoles = useSelector(getUserRole);
    const location = useLocation();

    const hasRequiredRoles: boolean = useMemo(() => {
        if (!roles) {
            return true;
        }

        return roles.some((requredRole) => userRoles?.includes(requredRole));
    }, [roles, userRoles]);

    if (!isAuth) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }

    if (!hasRequiredRoles) {
        return <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />;
    }  

    return children;
}
