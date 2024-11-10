import { classNames } from 'shared/lib/classNames/classNames';
import {
    FC, memo,
} from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { ReducersList, useAsyncStore } from 'shared/hooks/useAsyncStore';

import { Page } from 'widgets/Page/Page';

import { ArticleRecommendationsList } from 'features/articleRecommendationsList';
import { VStack } from 'shared/ui/Stack';

import { articleDetailsPageReducer } from '../../modal/slices/indext';

import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ui/ArticleDetailsPageHeader';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducer: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    useAsyncStore({ initialReducers: reducer, removeAfterUnmount: true });
    const { id } = useParams();
    const { t } = useTranslation('article');
    if (!id) {
        return (
            <Page>
                {t('Статья не найдена!')}
            </Page>
        );
    }
    return (
        // eslint-disable-next-line i18next/no-literal-string
        <Page className={classNames('', {}, [className])}>
            <VStack gap="16" max>
                <ArticleDetailsPageHeader />
                <ArticleDetails id={id} />
                <ArticleRecommendationsList />
                <ArticleDetailsComments id={id} />
            </VStack>
        </Page>
    );
};

export default memo(ArticleDetailsPage);
