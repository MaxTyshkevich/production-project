import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkExtraArg } from 'app/providers/StoreProvider/config/StateSchema';
import { Article } from '../../types/article';

export const fetchArticleById = createAsyncThunk<
    Article,
    string

    >(
        'articleDetails/fetchArticleData',
        async (id, thunkApi) => {
            const { extra, rejectWithValue } = thunkApi;

            try {
                const response = await (extra as ThunkExtraArg).api.get<Article>(`/articles/${id}`);
                if (!response.data) {
                    throw new Error();
                }
                return response.data;
            } catch (e) {
                return rejectWithValue('error');
            }
        },
    );
