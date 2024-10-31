import { classNames } from 'shared/lib/classNames/classNames';
import {
    HTMLAttributeAnchorTarget, memo, useCallback,
    useEffect,
    useState,
} from 'react';
import { List, ListRowProps, WindowScroller } from 'react-virtualized';
import { PAGE_ID } from 'widgets/Page/Page';
import { TextSize, Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Article } from '../../modal/types/article';
import cls from './ArticleList.module.scss';
import { ArticleView, ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
  className?: string;
  articles: Article[]
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
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
    target = '_self',
}:ArticleListProps) => {
    const { t } = useTranslation('article');
    const isBig = view === ArticleView.BIG;
    const itemsPerRow = isBig ? 1 : 3;
    const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemsPerRow);

    /*     const RenderArticles = useCallback((article: Article) => (
        <ArticleListItem
            view={view}
            article={article}
            className={cls.card}
            key={article.id}
            target={target}
        />
    ), [target, view]); */

    const rowRenderer = ({
        index, key, style,
    }: ListRowProps) => {
        const items = [];
        const fromIndex = index * itemsPerRow;
        const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

        for (let i = fromIndex; i < toIndex; i += 1) {
            items.push(
                <ArticleListItem
                    article={articles[i]}
                    view={view}
                    target={target}
                    key={`str${i}`}
                    className={cls.card}
                />,
            );
        }
        return (
            <div key={key} className={cls.row} style={style}>
                {items}
            </div>
        );
    };

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text size={TextSize.L} title={t('Статьи не найдены')} />
            </div>
        );
    }

    return (

        <WindowScroller
            scrollElement={document.getElementById(PAGE_ID) ?? undefined}
        >
            {({
                width, height, registerChild, isScrolling, onChildScroll, scrollTop,
            }) => (
                <div className={classNames(cls.articlelist, {}, [cls[view], className])} ref={registerChild}>
                    <List
                        height={height ?? 700}
                        rowCount={rowCount}
                        rowHeight={isBig ? 700 : 330}
                        rowRenderer={rowRenderer}
                        width={width ? width - 80 : 700}
                        autoHeight
                        isScrolling={isScrolling}
                        onScroll={onChildScroll}
                        scrollTop={scrollTop}
                    />
                    {isLoading && getSkeletons(view)}
                </div>
            )}

        </WindowScroller>
    );
});

// {<div className={classNames(cls.articlelist, {}, [cls[view], className])}>
//     {articles.map(RenderArticles)}
//     {isLoading && getSkeletons(view)}
// </div>}
