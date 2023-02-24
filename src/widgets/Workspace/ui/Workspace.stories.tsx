import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Workspace } from 'widgets/Workspace';

export default {
    title: 'widgets/Workspace',
    component: Workspace,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Workspace>;

// @ts-ignore
const Template: ComponentStory<typeof Workspace> = (args) => <Workspace {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    items: [],
};

export const Dark = Template.bind({});
Dark.args = {
    items: [],
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
