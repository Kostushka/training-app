import { useMemo } from 'react';

export const usePagination = (totalPagesCount) => {
    const getPagesArray = useMemo(() => {
        let pagesArray = [];
        for (let i = 1; i <= totalPagesCount; i++) {
            pagesArray.push(i);
        }
        return pagesArray;
    }, [totalPagesCount]);
    return getPagesArray;
};
