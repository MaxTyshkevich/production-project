import { classNames } from 'shared/lib/classNames/classNames';
import { FC, useCallback } from 'react';
import CopyIcon from 'shared/assets/icons/copy-20-20.svg';
import cls from './Code.module.scss';
import { Button, ButtonTheme } from '../Button/Button';
import { Icon } from '../Icon/Icon';

interface CodeProps {
  text:string;
  className?: string;
}

export const Code = ({ className, text }:CodeProps) => {
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <div className={classNames(cls.code, {}, [className])}>
            <Button className={cls.copyBtn} theme={ButtonTheme.CLEAR} onClick={onCopy}>
                <Icon Svg={CopyIcon} className={cls.copyIcon} />
            </Button>
            <pre>
                <code>
                    {text}
                </code>
            </pre>
        </div>
    );
};
