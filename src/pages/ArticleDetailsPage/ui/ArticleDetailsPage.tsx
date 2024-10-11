import { classNames } from 'shared/lib/classNames/classNames';
import {
    FC, memo, useCallback, useEffect,
} from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { ReducersList, useAsyncStore } from 'shared/hooks/useAsyncStore';
import { CommentList } from 'entities/Comment';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { AddCommentForm } from 'features/AddCommentForm';
import cls from './ArticleDetailsPage.module.scss';
import { articleDetailsCommentsReducer, getArticleComments } from '../modal/slices/articleDetailsCommentsSlice';
import { fetchCommentsByArticleId } from '../modal/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { addCommentForArticle } from '../modal/services/addCommentForArticle/addCommentForArticle';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducer: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className, children }) => {
    useAsyncStore({ initialReducers: reducer, removeAfterUnmount: true });
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const comments = useSelector(getArticleComments.selectAll);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchCommentsByArticleId(id));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!id) {
        return (
            <div className={classNames(cls.articledetailspage, {}, [className])}>
                {t('Статья не найдена!')}
            </div>
        );
    }
    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames(cls.articledetailspage, {}, [className])}>
            <ArticleDetails id={id} />
            <AddCommentForm onSendComment={onSendComment} />
            <CommentList comments={comments} />
        </div>
    );
};

export default memo(ArticleDetailsPage);
