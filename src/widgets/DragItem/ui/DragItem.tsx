import React, { ReactNode } from 'react';
import { DragType } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import { classNames } from 'shared/utils/classNames/classNames';
import styles from './DragItem.module.scss';

interface DragItemProps {
    collapsed?: boolean;
    type: DragType;
    placeholder: string;
    children: ReactNode
}

export const DragItem = ({
    collapsed = false, type, placeholder, children,
}: DragItemProps) => {
    const onDragStart = (event: React.DragEvent<HTMLDivElement>, type: DragType) => {
        event.dataTransfer.setData('item', type);
    };

    return (
        <div
            draggable
            onDragStart={(e) => onDragStart(e, type)}
            className={classNames(
                styles.item_wrapper,
                { [styles.collapsed_item]: collapsed },
                [],
            )}
        >
            {
                collapsed ? children : <span>{placeholder}</span>
            }
        </div>
    );
};
