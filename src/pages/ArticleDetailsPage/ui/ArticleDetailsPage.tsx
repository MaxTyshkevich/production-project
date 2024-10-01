import { classNames } from 'shared/lib/classNames/classNames';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className, children }) => {
    const { t } = useTranslation('article');

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames(cls.articledetailspage, {}, [className])}>
            Article Details Page
        </div>
    );
};

export default memo(ArticleDetailsPage);
