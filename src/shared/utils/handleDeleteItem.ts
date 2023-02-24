import { WorkspaceItem } from 'widgets/Workspace/ui/Workspace';
import React from 'react';

export function removeItemById(
    item: WorkspaceItem,
    items: WorkspaceItem[],
    setItems: React.Dispatch<React.SetStateAction<WorkspaceItem[]>>,
) {
    const newItems = items.filter((element) => element.id !== item.id);
    setItems(newItems);
    localStorage.setItem('items', JSON.stringify(newItems));
}
