/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Theme } from 'app/providers/ThemeProvider';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const onClose = useCallback(() => setIsOpen(false), []);
    const onOpen = () => setIsOpen(true);
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onOpen}>{t('Войти')}</Button>
                <Modal isOpen={isOpen} onClose={onClose}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    In debitis nulla reiciendis suscipit, ratione labore perspiciatis?
                    Quis pariatur ipsa excepturi eveniet cum veniam soluta dolores, sequi
                    quam rem, blanditiis quos eligendi tenetur possimus nesciunt reprehenderit
                    deleniti harum modi iste minima eum nisi in quibusdam.
                </Modal>
            </div>
        </div>
    );
};
