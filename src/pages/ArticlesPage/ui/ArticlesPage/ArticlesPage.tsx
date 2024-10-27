import { classNames } from 'shared/lib/classNames/classNames';
import {
    FC, memo, useCallback, useEffect,

} from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleList } from 'entities/Article';
import { ReducersList, useAsyncStore } from 'shared/hooks/useAsyncStore';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

import { useSelector } from 'react-redux';
import { Page } from 'widgets/Page/Page';
import { useSearchParams } from 'react-router-dom';
import { articlesPageReducer, getArticles } from '../../modal/slices/ArticlePageSlice';
import {
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../modal/selectors/articlesPageSelectors';

import { fetchNextArticlesPage } from '../../modal/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { fetchArtilesFirst } from '../../modal/services/fetchArtilesFirst/fetchArtilesFirst';
import {
    ArticlesPageFilters,
} from '../../../../entities/Article/ui/ArticlesPageFilters/ArticlesPageFilters';
import cls from './ArticlesPage.module.scss';

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
    const articles = useSelector(getArticles.selectAll);
    const [searchParams] = useSearchParams();
    useAsyncStore({
        initialReducers: reducers,

    });

    useEffect(() => {
        // first loading data, read search params from url page
        dispatch(fetchArtilesFirst(searchParams));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    return (

        <Page className={classNames('articlesPage', {}, [className])} onScrollEnd={onLoadNextPart}>

            <ArticlesPageFilters />
            <ArticleList
                isLoading={isLoading}
                articles={articles}
                view={view}
                className={cls.list}
            />
        </Page>

    );
};

export default memo(ArticlesPage);
