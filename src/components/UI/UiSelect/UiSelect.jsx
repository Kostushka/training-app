import styles from './UiSelect.module.css';

const UiSelect = ({ value, onChange, options, defaultValue }) => {
    return (
        <div className={styles.container}>
            <select
                className={styles.select}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            >
                <option disabled value=''>
                    {defaultValue}
                </option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default UiSelect;
