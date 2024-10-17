import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties, FC } from 'react';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  border?: string;
}

export const Skeleton: FC<SkeletonProps> = ({
    className,
    children,
    width,
    height,
    border,
}) => {
    const styles:CSSProperties = {
        width,
        height,
        borderRadius: border,
    };

    return (
        <div
            className={classNames(cls.skeleton, {}, [className])}
            style={styles}
        >
            {children}
        </div>
    );
};
