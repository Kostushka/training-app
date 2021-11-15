import styles from './UiButton.module.css';

const UiButton = ({ children, ...props }) => {
    return (
        <>
            <button className={styles.btn} {...props}>
                {children}
            </button>
        </>
    );
};

export default UiButton;
