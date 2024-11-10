import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
    INVERTED = 'inverted',
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

export enum TextSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;

    'data-testid'?: string
}

type HeaderTagType = 'h2' | 'h3' | 'h4';

const mapSizeToHeaderTag :Record<TextSize, HeaderTagType> = {
    [TextSize.S]: 'h4',
    [TextSize.M]: 'h3',
    [TextSize.L]: 'h2',
};

export const Text = (props: TextProps) => {
    const {
        className,
        text,
        title,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,

        'data-testid': dataTestId = 'Text',
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];
    return (
        <div className={classNames(cls.Text, { }, [cls[theme], cls[align], cls[size], className])}>
            {title && <HeaderTag className={cls.title} data-testid={`${dataTestId}.Header`}>{title}</HeaderTag>}
            {text && <p className={cls.text} data-testid={`${dataTestId}.Paragraph`}>{text}</p>}
        </div>
    );
};
