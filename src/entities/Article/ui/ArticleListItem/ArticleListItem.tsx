import { memo, useCallback } from 'react';
import type{ Article } from 'entities/Article';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Card } from 'shared/ui/Card/Card';
import { ArticleBlock, ArticleBlockText, ArticleBlockType } from 'entities/Article/modal/types/article';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useHover } from 'shared/hooks/useHover';
import cls from './ArticleListItem.module.scss';
import { ArticleText } from '../ArticleText/ArticleText';

export enum ArticleView {
  BIG ='BIG',
  SMALL ='SMALL',
}

interface ArticleListItemProps {
  className?: string;
  view: ArticleView;
  article: Article
}

export const ArticleListItem = memo(({
    className,
    article,
    view,
}:ArticleListItemProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [isHover, hoverEvents] = useHover();
    const onOpenArticle = useCallback(() => {
        navigate(RoutePath.article_details + article.id);
    }, [article.id, navigate]);

    const types = <Text text={article.type.join(', ')} className={cls.types} />;

    const views = (
        <>
            <Text text={String(article.views)} className={cls.views} />
            <Icon Svg={EyeIcon} />
        </>
    );
    if (view === ArticleView.BIG) {
        const textBlock = article?.blocks.find(
            (block: ArticleBlock): block is ArticleBlockText => block.type === ArticleBlockType.TEXT,
        );

        return (
            <Card className={classNames(cls.articlelistitem, {}, [cls[view], className])} {...hoverEvents}>
                <div className={cls.header}>
                    <Avatar size={30} src={article.user.avatar} />
                    <Text text={article.user.username} className={cls.username} />
                    <Text text={article.createdAt} className={cls.date} />
                </div>
                <Text title={article.title} className={cls.title} />
                {types}
                <img src={article.img} className={cls.img} alt={article.title} />
                {textBlock && (
                    <ArticleText block={textBlock} className={cls.textBlock} />
                )}
                <div className={cls.footer}>
                    <Button onClick={onOpenArticle} theme={ButtonTheme.OUTLINE}>
                        {t('Читать далее...')}
                    </Button>
                    {views}
                </div>
            </Card>
        );
    }
    return (
        <Card className={classNames(cls.articlelistitem, {}, [cls[view], className])} {...hoverEvents}>
            <div className={cls.imageWrapper}>
                <img alt={article.title} src={article.img} className={cls.img} />
                <Text text={article.createdAt} className={cls.date} />
            </div>
            <div className={cls.infoWrapper}>
                {types}
                {views}
            </div>
        </Card>
    );
});
