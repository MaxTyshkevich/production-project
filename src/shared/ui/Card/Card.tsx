import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributes, memo, ReactNode } from 'react';
import cls from './Card.module.scss';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
    theme?: CardTheme;
}

export const Card = memo((props: CardProps) => {
    const {
        className,
        theme = CardTheme.NORMAL,
        children,
        ...otherProps
    } = props;

    return (
        <div
            className={classNames(cls.Card, {}, [cls[theme], className])}
            {...otherProps}
        >
            {children}
        </div>
    );
});
