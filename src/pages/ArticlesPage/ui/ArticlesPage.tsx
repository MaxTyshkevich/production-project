/* eslint-disable i18next/no-literal-string */
/* eslint-disable max-len */
import { classNames } from 'shared/lib/classNames/classNames';
import {
    FC, memo, MutableRefObject, useCallback, useEffect,
    useRef,
} from 'react';
import { useTranslation } from 'react-i18next';
import { Article, ArticleList, ArticleView } from 'entities/Article';
import { ReducersList, useAsyncStore } from 'shared/hooks/useAsyncStore';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ArticleViewSelector } from 'entities/Article/ui/ArticleViewSelector/ArticleViewSelector';
import { useSelector } from 'react-redux';
import { Page } from 'shared/ui/Page/Page';
import { articlesPageActions, articlesPageReducer, getArticles } from '../modal/slices/ArticlePageSlice';
import { getArticlesPageIsLoading, getArticlesPageView } from '../modal/selectors/articlesPageSelectors';
import { fetchArticlesList } from '../modal/services/fetchArticlesList/fetchArticlesList';
import { fetchNextArticlesPage } from '../modal/services/fetchNextArticlesPage/fetchNextArticlesPage';

interface ArticlePageProps {
  className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage: FC<ArticlePageProps> = ({ className, children }) => {
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesPageView);
    const isLoading = useSelector(getArticlesPageIsLoading);

    const triggerRef = useRef<HTMLDivElement | null>(null);
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    const articles = useSelector(getArticles.selectAll);
    useAsyncStore({
        initialReducers: reducers,
        removeAfterUnmount: true,
    });

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    useEffect(() => {
        dispatch(articlesPageActions.initState());
        dispatch(fetchArticlesList({
            page: 1,
        }));
    }, [dispatch]);

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    return (

        <Page className={classNames('', {}, [className])} onScrollEnd={onLoadNextPart}>
            <ArticleViewSelector view={view} onViewClick={onChangeView} />
            <ArticleList
                isLoading={isLoading}
                articles={articles}
                view={view}
            />
        </Page>

    );
};

export default memo(ArticlesPage);
