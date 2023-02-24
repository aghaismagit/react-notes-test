import { WorkspaceItem } from 'widgets/Workspace/ui/Workspace';
import React from 'react';

interface IHandleEditClickProps {
    item: WorkspaceItem,
    items: WorkspaceItem[],
    setItems: React.Dispatch<React.SetStateAction<WorkspaceItem[]>>;
}

export const handleEditClick = ({ item, setItems, items }: IHandleEditClickProps) => {
    const newItems = items.map((currentItem) => {
        if (currentItem.id === item.id) {
            return {
                ...currentItem,
                editable: true,
            };
        }
        return currentItem;
    });
    setItems(newItems);
};
