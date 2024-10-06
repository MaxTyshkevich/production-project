import { classNames } from 'shared/lib/classNames/classNames';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className, children }) => {
    const { t } = useTranslation('article');
    const { id } = useParams();

    if (!id) {
        return (
            <div className={classNames(cls.articledetailspage, {}, [className])}>
                {t('Статья не найдена!')}
            </div>
        );
    }
    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames(cls.articledetailspage, {}, [className])}>
            <ArticleDetails id={id} />
        </div>
    );
};

export default memo(ArticleDetailsPage);
