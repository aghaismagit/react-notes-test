import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { DragItem } from 'widgets/DragItem/ui/DragItem';

export default {
    title: 'widgets/DragItem',
    component: DragItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof DragItem>;

const Template: ComponentStory<typeof DragItem> = (args) => <DragItem {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    children: 'Text',
    placeholder: 'Добавить текст',
};

export const Dark = Template.bind({});
Dark.args = {
    children: 'Text',
    placeholder: 'Добавить текст',
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const NormalCollapsed = Template.bind({});
NormalCollapsed.args = {
    children: '☺',
    placeholder: 'Добавить текст',
    collapsed: true,
};

export const DarkCollapsed = Template.bind({});
DarkCollapsed.args = {
    children: '☺',
    placeholder: 'Добавить текст',
    collapsed: true,
};

DarkCollapsed.decorators = [ThemeDecorator(Theme.DARK)];
