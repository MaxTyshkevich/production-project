import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Input } from 'shared/ui/Input/Input';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useAsyncStore } from 'shared/hooks/useAsyncStore';
import { useSelector } from 'react-redux';
import { HStack } from 'shared/ui/Stack';
import cls from './AddCommentForm.module.scss';
import { addCommentFormActions, addCommentFormReducer } from '../modal/slice/addCommentFormSlice';
import { getAddCommentFormError, getAddCommentFormText } from '../modal/selectors/addCommentFormSelectors';

export interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}
const reducers = {
    addCommentForm: addCommentFormReducer,

};

const AddCommentForm = memo(({ className, onSendComment }:AddCommentFormProps) => {
    useAsyncStore({
        initialReducers: reducers,
        removeAfterUnmount: true,
    });
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <HStack justify="between" max className={classNames(cls.addcommentform, {}, [className])}>
            <Input
                className={cls.input}
                placeholder={t('Введите текст комментария')}
                value={text}
                onChange={onCommentTextChange}
            />
            <Button
                theme={ButtonTheme.OUTLINE}
                onClick={onSendHandler}
            >
                {t('Отправить')}
            </Button>
        </HStack>
    );
});

export default AddCommentForm;
