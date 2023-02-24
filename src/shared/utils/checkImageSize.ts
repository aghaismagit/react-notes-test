import { toast } from 'react-toastify';

export const checkImageSize = (file: File): boolean => {
    const fileSizeInMB = file.size / (1024 * 1024); // Размер в мегабайтах

    if (fileSizeInMB > 1) {
        toast('Размер файла не должен превышать 1 мб', {
            type: 'error',
        });
    }

    return fileSizeInMB > 1;
};
