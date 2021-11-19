import styles from './UiModal.module.css';
import cn from 'classnames';

const UiModal = ({ children, visible, setVisible }) => {
    return (
        <div
            className={cn(styles.modalContainer, visible && styles.active)}
            onClick={(e) => setVisible(false)}
        >
            <div
                className={styles.content}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default UiModal;
