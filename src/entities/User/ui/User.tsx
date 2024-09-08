import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import cls from './User.module.scss';

interface UserProps {
  className?: string;
}

export const User: FC<UserProps> = ({ className, children }) => (
    <div className={classNames(cls.user, {}, [className])}>
        {children}
    </div>
);
