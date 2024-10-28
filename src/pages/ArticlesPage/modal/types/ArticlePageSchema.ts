import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleSortField } from 'entities/Article';
import { ArticleType } from 'entities/Article/modal/types/article';
import { ArticleView } from 'entities/Article/ui/ArticleListItem/ArticleListItem';
import { SortOrder } from 'shared/types';

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading: boolean;
  error?: string;

  // pagination
  page: number;
  limit: number;
  hasMore: boolean;

  // filters
  view: ArticleView;
  order: SortOrder;
  sort: ArticleSortField;
  search: string;
  type: ArticleType;

  _inited: boolean
}