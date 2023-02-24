import React, { FC } from 'react';
import { WorkspaceItem } from 'widgets/Workspace/ui/Workspace';
import { Row } from 'widgets/Workspace/ui/Row/Row';
import styles from './WorkspaceList.module.scss';

interface IWorkspaceListProps {
    items: WorkspaceItem[],
    setItems: React.Dispatch<React.SetStateAction<WorkspaceItem[]>>;
}

export const WorkspaceList: FC<IWorkspaceListProps> = ({ items, setItems }) => (
    <div className={styles.list_wrapper}>
        {items.map((item) => (
            <Row
                key={item.id}
                item={item}
                setItems={setItems}
                items={items}
            />
        ))}
        {items.length === 0 && <h2>У вас пока нет заметок</h2>}
    </div>
);
