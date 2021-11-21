import styles from './UiLoading.module.css';

const UiLoading = () => {
    return (
        <div className={styles.container}>
            <div className={styles.loader}></div>
        </div>
    );
};

export default UiLoading;
