import { ReactNode } from 'react';
import { classNames, Mods } from '../../../lib/classNames/classNames';
import cls from './Flex.module.scss';

export type FlexJustify = 'start'| 'center' | 'end' | 'beetwen';
export type FlexAlign = 'start'| 'center' | 'end';
export type FlexDiration = 'row'| 'column';
export type FlexGap = '4'| '8' | '16' | '32';

const justifyClasses: Record<FlexJustify, string> = {
    start: cls.justifyStart,
    center: cls.justifyCenter,
    end: cls.justifyEnd,
    beetwen: cls.justifyBeetwen,
};

const alignClasses: Record<FlexAlign, string> = {
    start: cls.alignStart,
    center: cls.alignCenter,
    end: cls.alignEnd,
};

const durationClasses: Record<FlexDiration, string> = {
    row: cls.durationRow,
    column: cls.directionColumn,
};
const gapClasses: Record<FlexGap, string> = {
    4: cls.gap4,
    8: cls.gap8,
    16: cls.gap16,
    32: cls.gap32,
};

export interface FlexProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  direction: FlexDiration;
  children: ReactNode;
  justify?: FlexJustify;
  className?: string;
  align?: FlexAlign;
  gap?: FlexGap;
  max?: boolean;
}

export const Flex = ({
    className,
    children,
    justify = 'start',
    align = 'center',
    direction = 'row',
    gap,
    max,
}: FlexProps) => {
    const mods: Mods = {
        [cls.max]: max,
    };

    const classes = [
        justifyClasses[justify],
        alignClasses[align],
        durationClasses[direction],
        gap && gapClasses[gap],
        className,
    ];
    return (
        <div className={classNames(cls.flex, mods, classes)}>
            {children}
        </div>
    );
};
