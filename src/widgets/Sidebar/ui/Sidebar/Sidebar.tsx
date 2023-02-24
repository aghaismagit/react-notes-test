import React, { useState } from 'react';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { classNames } from 'shared/utils/classNames/classNames';
import { DragItem } from 'widgets/DragItem/ui/DragItem';

import TextIcon from 'shared/assets/icons/TextIcon.svg';
import ImageIcon from 'shared/assets/icons/ImageIcon.svg';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

import styles from './Sidebar.module.scss';

export type DragType = 'text' | 'image';

export const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div className={classNames(styles.sidebar_wrapper, { [styles.collapsed]: collapsed }, [])}>

            <h3 className={styles.title}>Доступные элементы</h3>

            <DragItem
                type="text"
                placeholder="Добавить текст"
                collapsed={collapsed}
            >
                <TextIcon />
            </DragItem>
            <DragItem
                type="image"
                placeholder="Добавить изображение"
                collapsed={collapsed}
            >
                <ImageIcon />
            </DragItem>

            <div className={styles.theme_switcher}>
                <ThemeSwitcher />
            </div>

            <Button
                onClick={onToggle}
                className={styles.collapseBtn}
                theme={ButtonTheme.BACKGROUND}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
        </div>
    );
};
