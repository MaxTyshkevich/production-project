import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Page } from 'widgets/Page/Page';
import cls from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage = memo(({ className }:ArticleEditPageProps) => (
    // eslint-disable-next-line i18next/no-literal-string
    <Page className={classNames(cls.articleeditpage, {}, [className])}>
        ArticleEditPage

    </Page>
));
export default ArticleEditPage;
