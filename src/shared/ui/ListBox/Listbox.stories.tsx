import React from 'react';
import { addDecorator, ComponentMeta, ComponentStory } from '@storybook/react';
import { Listbox } from './Listbox';

export default {
    title: 'shared/Listbox',
    component: Listbox,
    decorators: [(Store: () => React.ReactChild) => (
        <div style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: ' center',
        }}
        >
            {Store()}
        </div>
    )],
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

export const menuTopRight = Template.bind({});
menuTopRight.args = {
    direction: 'top right',
};

export const menuTopLeft = Template.bind({});
menuTopLeft.args = {
    direction: 'top left',
};

export const menuBottomRight = Template.bind({});
menuBottomRight.args = {
    direction: 'bottom right',
};

export const menuBottomLeft = Template.bind({});
menuBottomLeft.args = {
    direction: 'bottom left',
};
