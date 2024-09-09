import { FC, useCallback } from 'react';
// eslint-disable-next-line max-len
import { loginByUsername } from 'features/AuthByUserName/model/services/loginByUsername/LoginByUsername';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getLoginState } from 'features/AuthByUserName/model/selectors/getLoginState/getLoginState';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginActions } from 'features/AuthByUserName';

import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const {
        username, password, error, isLoading,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(cls.loginform, {}, [className])}>
            <Text title={t('Форма авторизации')} />
            {error
             && <Text text={t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR} />}
            <Input
                autofocus
                type="text"
                className={cls.input}
                placeholder={t('Введите username')}
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Введите пароль')}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                className={cls.loginBtn}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    );
};
