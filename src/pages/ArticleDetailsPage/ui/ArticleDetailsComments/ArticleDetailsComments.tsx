import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useEffect } from 'react';
import { VStack } from 'shared/ui/Stack';
import { TextSize, Text } from 'shared/ui/Text/Text';
import { AddCommentForm } from 'features/AddCommentForm';
import { CommentList } from 'entities/Comment';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getArticleComments } from '../../modal/slices/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from '../../modal/selector/comments';
import { fetchCommentsByArticleId } from '../../modal/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { addCommentForArticle } from '../../modal/services/addCommentForArticle/addCommentForArticle';

interface ArticleDetailsCommentsProps {
  id: string;
  className?: string;
}

export const ArticleDetailsComments = memo(({ className, id }:ArticleDetailsCommentsProps) => {
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    }, [id, dispatch]);

    return (
        <VStack gap="16" className={classNames('', {}, [className])}>
            <Text title={t('Комментарии')} size={TextSize.L} />
            <AddCommentForm onSendComment={onSendComment} />
            <CommentList comments={comments} isLoading={commentsIsLoading} />
        </VStack>
    );
});
