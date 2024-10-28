import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article, ArticleSortField } from 'entities/Article';
import { SortOrder } from 'shared/types';
import { ArticleType } from 'entities/Article/modal/types/article';
import { getArticlesPageInited, getArticlesPageLimit } from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/ArticlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const fetchArtilesFirst = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
    >(
        'articlesPage/fetchArtilesFirst',
        async (searchParams, thunkApi) => {
            const {
                extra,
                rejectWithValue,
                dispatch,
                getState,
            } = thunkApi;

            const inited = getArticlesPageInited(getState());

            if (!inited) {
                const orderFromIUrl = searchParams.get('order') as SortOrder;
                const sortFromIUrl = searchParams.get('sort') as ArticleSortField;
                const searchFromIUrl = searchParams.get('search');
                const typeFromIUrl = searchParams.get('type') as ArticleType;

                if (orderFromIUrl) {
                    dispatch(articlesPageActions.setOrder(orderFromIUrl));
                }
                if (sortFromIUrl) {
                    dispatch(articlesPageActions.setSort(sortFromIUrl));
                }
                if (searchFromIUrl) {
                    dispatch(articlesPageActions.setSearch(searchFromIUrl));
                }
                if (typeFromIUrl) {
                    dispatch(articlesPageActions.setType(typeFromIUrl));
                }

                dispatch(articlesPageActions.initState());
                dispatch(fetchArticlesList({}));
            }
        },
    );
