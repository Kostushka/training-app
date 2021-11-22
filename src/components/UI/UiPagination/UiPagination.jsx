import cn from 'classnames';
import { usePagination } from '../../../hooks/usePagination';
import styles from './UiPagination.module.css';

const UiPagination = ({ totalPagesCount, page, changePage }) => {
    const pagesArray = usePagination(totalPagesCount);
    return (
        <div className={styles.container}>
            {pagesArray.map((p) => (
                <button
                    key={p}
                    className={cn(
                        styles.page,
                        page === p && styles.current__page
                    )}
                    onClick={() => changePage(p)}
                >
                    {p}
                </button>
            ))}
        </div>
    );
};

export default UiPagination;
