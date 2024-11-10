import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleList } from 'entities/Article';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { getArticles } from '../../modal/slices/ArticlePageSlice';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../modal/selectors/articlesPageSelectors';

interface ArticleInfiniteListProps {
  className?: string;
}

export const ArticleInfiniteList = memo((props:ArticleInfiniteListProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const error = useSelector(getArticlesPageError);

    if (error) {
        return <Text text={t('Ошибка при загрузке статей')} />;
    }
    return (
        <ArticleList
            isLoading={isLoading}
            articles={articles}
            view={view}
            className={classNames('', {}, [className])}
        />
    );
});
