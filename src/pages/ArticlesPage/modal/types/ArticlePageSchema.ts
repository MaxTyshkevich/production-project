import { EntityState } from '@reduxjs/toolkit';
import { Article } from 'entities/Article';
import { ArticleView } from 'entities/Article/ui/ArticleListItem/ArticleListItem';

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading: boolean;
  error?: string;
  view: ArticleView;
  // pagination
  page: number;
  limit?: number;
  hasMore: boolean;
}
