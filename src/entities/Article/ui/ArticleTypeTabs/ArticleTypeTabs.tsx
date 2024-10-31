import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { ArticleType } from '../../modal/types/article';

interface ArticleTypeTabsProps {
  value: ArticleType;
  onChangeType: (type: ArticleType) => void;
  className?: string;
}

export const ArticleTypeTabs = memo((props:ArticleTypeTabsProps) => {
    const { value, onChangeType, className } = props;
    const { t } = useTranslation('article');

    const typeTabs = useMemo(() => ([
        {
            value: ArticleType.ALL,
            content: t('Все статьи'),
        },
        {
            value: ArticleType.IT,
            content: t('Айти'),
        },
        {
            value: ArticleType.ECONOMICS,
            content: t('Экономика'),
        },
        {
            value: ArticleType.SCIENCE,
            content: t('Наука'),
        },
    ]), [t]);

    const onTabClick = useCallback((tab: TabItem) => {
        onChangeType(tab.value);
    }, [onChangeType]);

    return (
    // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames('', {}, [className])}>
            <Tabs tabs={typeTabs} value={value} onTabClick={onTabClick} />
        </div>
    );
});
