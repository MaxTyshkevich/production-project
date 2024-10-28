/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useEffect } from 'react';
import { ReducersList, useAsyncStore } from 'shared/hooks/useAsyncStore';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from 'entities/Article';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import {
    TextAlign, Text, TextTheme, TextSize,
} from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from 'entities/Article/modal/selectors/articleDetails';
import { useTranslation } from 'react-i18next';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg';
import { ArticleBlock, ArticleBlockType } from 'entities/Article/modal/types/article';
import cls from './ArticleDetails.module.scss';
import { articleDetailsReducer } from '../../modal/slice/articleDetailSlice';
import { ArticleCodeBlock } from '../ArticleCodeBlock/ArticleCodeBlock';
import { ArticleImage } from '../ArticleImage/ArticleImage';
import { ArticleText } from '../ArticleText/ArticleText';

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reducer: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(({
    className,
    id,
}: ArticleDetailsProps) => {
    useAsyncStore({ initialReducers: reducer, removeAfterUnmount: true });
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const article = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);
    const { t } = useTranslation('article');
    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);

    let content;

    const renderBlock = useCallback((block:ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE: {
            return <ArticleCodeBlock key={block.id} block={block} />;
        }
        case ArticleBlockType.IMAGE: {
            return <ArticleImage key={block.id} block={block} />;
        }
        case ArticleBlockType.TEXT: {
            return <ArticleText key={block.id} block={block} />;
        }
        default: return null;
        }
    }, []);

    if (isLoading) {
        content = (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </>
        );
    } else if (error) {
        content = (
            <Text
                align={TextAlign.CENTER}
                theme={TextTheme.ERROR}
                title={t('Произошла ошибка при загрузке статьи.')}
            />
        );
    } else {
        content = (
            <>
                <div className={cls.avatarWrapper}>
                    <Avatar size={200} src={article?.img} className={cls.avatar} />
                </div>
                <Text
                    className={cls.title}
                    title={article?.title}
                    text={article?.subtitle}
                    size={TextSize.L}
                />
                <div className={cls.articleInfo}>
                    <Icon className={cls.icon} Svg={EyeIcon} />
                    <Text text={String(article?.views)} />
                </div>
                <div className={cls.articleInfo}>
                    <Icon className={cls.icon} Svg={CalendarIcon} />
                    <Text text={article?.createdAt} />
                </div>
                {article?.blocks.map(renderBlock)}
            </>
        );
    }

    return (

        <div className={classNames(cls.articleDetails, {}, [className])}>
            {content}
        </div>

    );
});