import styles from './UiInput.module.css';

const UiInput = (props) => {
    return (
        <>
            <input className={styles.input} {...props} />
        </>
    );
};

export default UiInput;
