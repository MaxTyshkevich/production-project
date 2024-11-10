import {
    AnyAction, CombinedState, EnhancedStore, Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entities/Article';

import { CounterSchema } from 'entities/Counter';

import { UserSchema } from 'entities/User';
import { AddCommentFormSchema } from 'features/AddCommentForm/modal/types/addCommentForm';
import { LoginSchema } from 'features/AuthByUserName';
import { ProfileSchema } from 'features/editableProfileCard';
import { ScrollPageSchema } from 'features/ScrollPage';
import { ArticleDetailsPageSchema } from 'pages/ArticleDetailsPage/modal/types';

import { ArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage/modal/types/ArticleDetailsCommentsSchema';
import { ArticlesPageSchema } from 'pages/ArticlesPage/modal/types/ArticlePageSchema';
import { NavigateOptions, To } from 'react-router-dom';
import { rtkApi } from 'shared/api/rtkApi';

export interface StateSchema {
  counter: CounterSchema,
  user: UserSchema,
  scrollPages: ScrollPageSchema,
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
  // async reducer
  loginForm?: LoginSchema,
  profile?: ProfileSchema,

  articleDetails?: ArticleDetailsSchema,

  /* 2 slices */
  articleDetailsPage?: ArticleDetailsPageSchema;

  addCommentForm?: AddCommentFormSchema;
  articlesPage?: ArticlesPageSchema;
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema, AnyAction>{
  reducerManager: ReducerManager
}

export interface ThunkExtraArg {
  api: AxiosInstance;
  navigate?: (to: To, options?: NavigateOptions) => void,
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
