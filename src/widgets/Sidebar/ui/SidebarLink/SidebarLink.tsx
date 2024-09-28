import { classNames } from 'shared/lib/classNames/classNames';
import {
    FC, memo, SVGProps, VFC,
} from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import { useTranslation } from 'react-i18next';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User/modal/selector/getUserAuthData/getUserAuthData';
import cls from './SidebarLink.module.scss';

interface SidebarLinkProps {
  className?: string;
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarLink = memo(({ className, item, collapsed }:SidebarLinkProps) => {
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
        >
            <item.Icon className={cls.icon} />

            <span className={cls.link}>
                {t(item.text)}
            </span>
        </AppLink>
    );
});
