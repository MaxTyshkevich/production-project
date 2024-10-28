import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from 'entities/Article/modal/selectors/articleDetails';
import { getCanEditArticle } from 'pages/ArticleDetailsPage/modal/selector/getCanEditArticle';
import cls from './ArticleDetailsPageHeader.module.scss';

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader = memo(({ className }:ArticleDetailsPageHeaderProps) => {
    const { t } = useTranslation('article');
    const navigate = useNavigate();
    const isEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailsData);

    const onBackToList = useCallback(() => {
        navigate(-1);
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        navigate(`${RoutePath.article_details}${article?.id}/edit`);
    }, [article?.id, navigate]);
    return (
        <div className={classNames(cls.articledetailspageheader, {}, [className])}>
            <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
                {t('Назад к списку')}
            </Button>
            {isEdit && (

                <Button theme={ButtonTheme.OUTLINE} onClick={onEditArticle}>
                    {t('Редактировать ')}
                </Button>
            )}
        </div>
    );
});
