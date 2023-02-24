// Libs
import React from 'react';
import { WorkspaceItem } from 'widgets/Workspace/ui/Workspace';

// Components
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { handleEditClick } from 'shared/utils/handleEditClick';
import { removeItemById } from 'shared/utils/handleDeleteItem';

// Icons
import SaveIcon from 'shared/assets/icons/Save.svg';
import EditIcon from 'shared/assets/icons/Edit.svg';
import DeleteIcon from 'shared/assets/icons/Delete.svg';

// Styles
import styles from './Textarea.module.scss';

interface ITextareaProps {
    item: WorkspaceItem,
    items: WorkspaceItem[],
    setItems: React.Dispatch<React.SetStateAction<WorkspaceItem[]>>;
}

export const Textarea = ({ item, setItems, items }: ITextareaProps) => {
    const handleTextChange = (id: number, data: string) => {
        const newItems = items.map((item) => {
            if (item.id === id) {
                return { ...item, data };
            }
            return item;
        });
        setItems(newItems);
    };

    const handleSaveClick = () => {
        const newItems = items.map((currentItem) => {
            if (currentItem.id === item.id) {
                return {
                    ...currentItem,
                    editable: false,
                };
            }
            return currentItem;
        });

        setItems(newItems);
        localStorage.setItem('items', JSON.stringify(newItems));
    };

    const handleEditClickWrapper = () => {
        handleEditClick({ item, setItems, items });
    };

    return (
        <div className="drag_item_wrapper">
            {
                item.type === 'text' && (
                    <>
                        <textarea
                            key={item.id}
                            value={item.data}
                            disabled={!item.editable}
                            onChange={(e) => handleTextChange(item.id, e.target.value as string)}
                            className={styles.textarea_wrapper}
                        />

                        <div className="drag_item_controls">
                            {item.editable === true && (
                                <Button
                                    onClick={handleSaveClick}
                                    theme={ButtonTheme.CLEAR}
                                    size={ButtonSize.L}
                                    square
                                >
                                    <SaveIcon />
                                </Button>
                            )}
                            {item.editable === false && (
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
                )
            }
        </div>
    );
};
