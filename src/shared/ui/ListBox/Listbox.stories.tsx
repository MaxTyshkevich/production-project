import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Listbox } from './Listbox';

export default {
    title: 'shared/Listbox',
    component: Listbox,
    argTypes: {
        backgroundColor: { control: 'color' },

    },
    args: {
        label: 'label',
        onChange: () => {},
        value: 'value',
        options: [
            {
                value: 'value-1',
                content: 'content-1',
            },
            {
                value: 'value-2',
                content: 'content-2',
            },
        ],

    },

} as unknown as ComponentMeta<typeof Listbox>;

const Template: ComponentStory<typeof Listbox> = (args) => <Listbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {

};

export const menuTop = Template.bind({});
menuTop.args = {
    direction: 'top',
};
export const menuBottom = Template.bind({});
menuBottom.args = {
    direction: 'bottom',
};
