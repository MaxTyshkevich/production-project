import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Listbox } from 'shared/ui/ListBox/Listbox';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = memo(({
    className, value, onChange, readonly,
}: CountrySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (

        <Listbox
            direction="top right"
            onChange={onChangeHandler}
            label={t('Укажите страну')}
            defaultValue={t('Укажите страну')}
            options={options}
            value={value}
            readonly={readonly}
        />
    );
});
