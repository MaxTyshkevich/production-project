import {
    FC, memo, useCallback,
} from 'react';
// eslint-disable-next-line max-len
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ReducersList, useAsyncStore } from 'shared/hooks/useAsyncStore';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/LoginByUsername';
import cls from './LoginForm.module.scss';

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

export interface LoginFormProps {
  className?: string;
  onSuccess: ()=> void;
}

const LoginForm = memo(({ className, onSuccess }:LoginFormProps) => {
    useAsyncStore({ initialReducers });

    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const {
        isLoading, password, username, error,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        /* result.meta.requestStatus */

        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [dispatch, onSuccess, password, username]);

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
});

export default LoginForm;
