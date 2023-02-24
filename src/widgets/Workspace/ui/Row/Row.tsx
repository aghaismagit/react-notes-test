import React, { FC } from 'react';
import { Textarea } from 'widgets/Workspace/ui/Row/textarea/Textarea';
import { Image } from 'widgets/Workspace/ui/Row/image/Image';
import { WorkspaceItem } from 'widgets/Workspace/ui/Workspace';

interface IRowProps {
    item: WorkspaceItem,
    items: WorkspaceItem[],
    setItems: React.Dispatch<React.SetStateAction<WorkspaceItem[]>>;
}

export const Row:FC<IRowProps> = ({ item, setItems, items }: IRowProps) => (
    <>
        <Textarea item={item} setItems={setItems} items={items} />
        <Image item={item} setItems={setItems} items={items} />
    </>
);
