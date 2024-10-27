import { classNames } from 'shared/lib/classNames/classNames';
import {
    FC, memo, useCallback, useEffect,
} from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleDetails, ArticleList } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { ReducersList, useAsyncStore } from 'shared/hooks/useAsyncStore';
import { CommentList } from 'entities/Comment';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { AddCommentForm } from 'features/AddCommentForm';
import { Page } from 'widgets/Page/Page';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './ArticleDetailsPage.module.scss';
import { articleDetailsCommentsReducer, getArticleComments } from '../modal/slices/articleDetailsCommentsSlice';
import { fetchCommentsByArticleId } from '../modal/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { addCommentForArticle } from '../modal/services/addCommentForArticle/addCommentForArticle';
import { articleDetailsPageReducer } from '../modal/slices/indext';
import { getArticleCommentsIsLoading } from '../modal/selector/comments';
import { getArticleRecommendationsIsLoading } from '../modal/selector/recommendations';
import { getArticleRecommendations } from '../modal/slices/articleDetailsPageRecomendationSlice';
import { fetchArticleRecommendations } from '../modal/services/fetchArticleRecomendations/fetchArticleRecomendations';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducer: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className, children }) => {
    useAsyncStore({ initialReducers: reducer, removeAfterUnmount: true });
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const comments = useSelector(getArticleComments.selectAll);
    const navigate = useNavigate();
    const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);
    const recommendations = useSelector(getArticleRecommendations.selectAll);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    const onBackToList = useCallback(() => {
        navigate(-1);
    }, [navigate]);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchCommentsByArticleId(id));
            dispatch(fetchArticleRecommendations());
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!id) {
        return (
            <Page>
                {t('Статья не найдена!')}
            </Page>
        );
    }
    return (
        // eslint-disable-next-line i18next/no-literal-string
        <Page className={classNames('', {}, [className])}>
            <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
                {t('Назад к списку')}
            </Button>
            <ArticleDetails id={id} />

            <Text title={t('Рекомендуем')} size={TextSize.L} className={cls.recommendArticles} />
            <ArticleList
                articles={recommendations}
                isLoading={recommendationsIsLoading}
                className={cls.recommendations}
                target="_blank"
            />

            <Text title={t('Комментарии')} size={TextSize.L} className={cls.commendTitle} />
            <AddCommentForm onSendComment={onSendComment} />
            <CommentList comments={comments} />
        </Page>
    );
};

export default memo(ArticleDetailsPage);
