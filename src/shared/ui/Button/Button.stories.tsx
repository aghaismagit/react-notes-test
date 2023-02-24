import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};

export const ClearDark = Template.bind({});
ClearDark.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};

ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Background = Template.bind({});
Background.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND,
};

export const BackgroundDark = Template.bind({});
BackgroundDark.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND,
};

BackgroundDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Square = Template.bind({});
Square.args = {
    children: '<',
    theme: ButtonTheme.BACKGROUND,
    square: true,
};

export const SquareDark = Template.bind({});
SquareDark.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND,
    square: true,
};

SquareDark.decorators = [ThemeDecorator(Theme.DARK)];

export const MSize = Template.bind({});
MSize.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND,
    size: ButtonSize.M,
};

export const LSize = Template.bind({});
LSize.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND,
    size: ButtonSize.L,
};

export const XLSize = Template.bind({});
XLSize.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND,
    size: ButtonSize.XL,
};
