import { classNames } from 'shared/lib/classNames/classNames';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticlesPage.module.scss';

interface ArticlePageProps {
  className?: string;
}

const ArticlePage: FC<ArticlePageProps> = ({ className, children }) => {
    const { t } = useTranslation('article');
    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames(cls.articlepage, {}, [className])}>
            Article page
        </div>
    );
};

export default memo(ArticlePage);
