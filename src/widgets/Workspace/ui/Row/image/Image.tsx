import React from 'react';
import { WorkspaceItem } from 'widgets/Workspace/ui/Workspace';
import DeleteIcon from 'shared/assets/icons/Delete.svg';
import EditIcon from 'shared/assets/icons/Edit.svg';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { handleEditClick } from 'shared/utils/handleEditClick';
import { removeItemById } from 'shared/utils/handleDeleteItem';
import { checkImageSize } from 'shared/utils/checkImageSize';
import styles from './Image.module.scss';

interface IImageProps {
    item: WorkspaceItem,
    items: WorkspaceItem[],
    setItems: React.Dispatch<React.SetStateAction<WorkspaceItem[]>>;
}

export const Image = ({ items, item, setItems }: IImageProps) => {
    const handleImageChange = (id: number, data: string) => {
        const newItems = items.map((item) => {
            if (item.id === id) {
                return { ...item, data, editable: false };
            }
            return item;
        });
        setItems(newItems);

        localStorage.setItem('items', JSON.stringify(newItems));
    };

    const handleEditClickWrapper = () => {
        handleEditClick({ item, setItems, items });
    };

    const handleFileSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        const isFileLarge = checkImageSize(file);

        if (file && isFileLarge) {
            e.target.value = null;
            return;
        }

        const reader = new FileReader();

        reader.onload = (e) => {
            handleImageChange(item.id, e.target?.result as string);
        };

        reader.readAsDataURL(file);
    };

    return (
        <div className="drag_item_wrapper">
            {
                item.type === 'image' && (
                    <div key={item.id} className={styles.image_wrapper}>
                        {item.editable && (
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => { handleFileSelection(e); }}
                            />
                        )}
                        {item.data
                            && (
                                <>

                                    <img
                                        src={item.data}
                                        alt="uploaded"
                                        className={styles.image}
                                    />
                                    <div className="drag_item_controls">
                                        {!item.editable && (
                                            <Button
                                                onClick={handleEditClickWrapper}
                                                theme={ButtonTheme.CLEAR}
                                                size={ButtonSize.L}
                                                square
                                            >
                                                <EditIcon />
                                            </Button>
                                        )}
                                        <Button
                                            onClick={() => removeItemById(item, items, setItems)}
                                            theme={ButtonTheme.CLEAR}
                                            size={ButtonSize.L}
                                            square
                                        >
                                            <DeleteIcon />
                                        </Button>
                                    </div>

                                </>
                            )}
                    </div>
                )
            }
        </div>
    );
};
