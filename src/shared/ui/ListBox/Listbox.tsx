import { Fragment, useState } from 'react';
import { Listbox as HListbox } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Listbox.module.scss';
import { Button } from '../Button/Button';
import { HStack } from '../Stack';

type DropdownDirection = 'top' | 'bottom';

interface TypeListboxOption {
  value: string;
  content: string;
  disabled?: boolean;
}

interface ListboxProps {
  onChange: (value: string) => void;
  className?: string,
  readonly?: boolean;
  label?: string;
  options?: TypeListboxOption[];
  value?: string;
  defaultValue?: string;
  direction?: DropdownDirection;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    bottom: cls.optionsBottom,
    top: cls.optionsTop,
};

export const Listbox = (props: ListboxProps) => {
    const {
        onChange,
        className,
        readonly,
        label,
        options,
        value,
        defaultValue,
        direction = 'bottom',
    } = props;
    const optionsClasses = [mapDirectionClass[direction]];
    console.log(optionsClasses);
    return (
        <HStack gap="4">
            {label ?? <HListbox.Label className={cls.label}>{label}</HListbox.Label>}
            <HListbox
                as="div"
                value={value}
                onChange={onChange}
                className={classNames(cls.listBox, {}, [className])}
                disabled={readonly}
            >
                <HListbox.Button>
                    <Button disabled={readonly}>
                        {value ?? defaultValue}
                    </Button>
                </HListbox.Button>
                <HListbox.Options className={classNames(cls.options, {}, optionsClasses)}>
                    {options?.map((opt: TypeListboxOption) => (
                        <HListbox.Option
                            as={Fragment}
                            key={opt.value}
                            value={opt.value}
                            disabled={opt.disabled}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(cls.items, {
                                        [cls.active]: active,
                                        [cls.selected]: selected,
                                    }, [])}
                                >

                                    {opt.content}
                                </li>
                            )}
                        </HListbox.Option>
                    ))}
                </HListbox.Options>
            </HListbox>
        </HStack>
    );
};
