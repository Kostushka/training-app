import styles from './Error.module.css';

const Error = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.error}>Страница не найдена!</h1>
        </div>
    );
};

export default Error;
