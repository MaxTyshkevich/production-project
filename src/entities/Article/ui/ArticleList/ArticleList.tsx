import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { Article } from 'entities/Article/modal/types/article';
import cls from './ArticleList.module.scss';
import { ArticleView, ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
  className?: string;
  articles: Article[]
  isLoading?: boolean;
  view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
    ));

export const ArticleList = memo(({
    articles,
    isLoading,
    view = ArticleView.SMALL,
    className,
}:ArticleListProps) => {
    const RenderArticles = useCallback((article: Article) => (
        <ArticleListItem
            view={view}
            article={article}
            className={cls.card}
            key={article.id}
        />
    ), [view]);
    return (
        <div className={classNames(cls.articlelist, {}, [cls[view], className])}>
            {articles.map(RenderArticles)}
            {isLoading && getSkeletons(view)}
        </div>
    );
});
