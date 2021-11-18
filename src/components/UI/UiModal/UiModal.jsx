import styles from './UiModal.module.css';

const UiModal = ({ children, visible, setVisible }) => {
    const rootModalClass = [styles.modalContainer];
    if (visible) {
        rootModalClass.push(styles.active);
    }
    return (
        <div
            className={rootModalClass.join(' ')}
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
