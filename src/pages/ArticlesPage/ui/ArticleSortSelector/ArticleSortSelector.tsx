import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useMemo } from 'react';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { ArticleSortField } from 'entities/Article';
import { SortOrder } from 'shared/types/index';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
  sort:ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
  className?: string;
}

export const ArticleSortSelector = memo((props :ArticleSortSelectorProps) => {
    const {
        sort, order, onChangeOrder, onChangeSort, className,
    } = props;

    const { t } = useTranslation('article');

    const sortfieldOptions: SelectOption[] = useMemo(() => ([{
        value: ArticleSortField.CREATED,
        content: t('дате создания'),
    },
    {
        value: ArticleSortField.TITLE,
        content: t('названию'),
    },
    {
        value: ArticleSortField.VIEWS,
        content: t('просмотрам'),
    }]), [t]);

    const orderOptions = useMemo<SelectOption[]>(() => [
        {
            value: 'asc' as SortOrder,
            content: t('возрастанию'),
        },
        {
            value: 'desc' as SortOrder,
            content: t('убыванию'),
        },
    ], [t]);

    const changeSortHandler = useCallback((newSort: string) => {
        onChangeSort(newSort as ArticleSortField);
    }, [onChangeSort]);

    const changeOrderHandler = useCallback((newOrder: string) => {
        onChangeOrder(newOrder as SortOrder);
    }, [onChangeOrder]);

    return (
        <div className={classNames(cls.articlesortselector, {}, [className])}>
            <Select
                label={t('Сортировать По')}
                value={sort}
                options={sortfieldOptions}
                onChange={changeSortHandler}
            />
            <Select
                label={t('По')}
                value={order}
                options={orderOptions}
                onChange={changeOrderHandler}
            />
        </div>
    );
});
