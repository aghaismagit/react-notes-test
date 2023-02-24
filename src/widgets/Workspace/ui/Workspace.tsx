import React, { useEffect, useState } from 'react';
import { WorkspaceList } from 'widgets/Workspace/ui/WorkspaceList/WorkspaceList';
import { DragType } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import { toast } from 'react-toastify';
import styles from './Workspace.module.scss';

export type WorkspaceItem = {
    id: number;
    type: DragType;
    data?: string;
    editable: boolean;
};

export const Workspace = () => {
    const [items, setItems] = useState<WorkspaceItem[]>([]);
    useEffect(() => {
        const itemsFromLocalStorage = JSON.parse(localStorage.getItem('items') || '[]');
        setItems(itemsFromLocalStorage);
    }, []);

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();

        const item = event.dataTransfer.getData('item') as DragType;

        const previousItemIsEditable = items.length && items.at(-1).editable;

        if (previousItemIsEditable) {
            toast('Пожалуйста, заполните заметку', {
                type: 'error',
            });
            return;
        }

        const newItem = {
            id: Date.now(), type: item, data: '', editable: true,
        };

        setItems([...items, newItem]);
    };
    return (
        <div
            className={styles.workspace_wrapper}
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
        >
            <h1 className={styles.title}>Заметки</h1>
            <WorkspaceList items={items} setItems={setItems} />
        </div>
    );
};
