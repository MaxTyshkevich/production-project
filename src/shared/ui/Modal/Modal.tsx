import { classNames } from 'shared/lib/classNames/classNames';
import React, { FC, useCallback, useEffect } from 'react';

import { useTheme } from 'app/providers/ThemeProvider';
import cls from './Modal.module.scss';
import { Portal } from '../Portal/Portal';

interface ModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void
}

export const Modal:FC<ModalProps> = ({
    className, children, isOpen, onClose,
}) => {
    const { theme } = useTheme();
    const closeHandler = useCallback(() => {
        if (onClose) {
            onClose();
        }
    }, [onClose]);

    const onContent = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
    };

    const onkeydown = useCallback((e:KeyboardEvent) => {
        if (e.key === 'Escape') { closeHandler(); }
    }, [closeHandler]);

    useEffect(() => {
        window.addEventListener('keydown', onkeydown);

        return () => {
            window.removeEventListener('keydown', onkeydown);
        };
    }, [onkeydown]);
    return (
        <Portal>
            <div
                className={classNames(cls.modal, mods, [theme, className])}

            >
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onContent}>
                        {children}
                    </div>

                </div>
            </div>
        </Portal>
    );
};
