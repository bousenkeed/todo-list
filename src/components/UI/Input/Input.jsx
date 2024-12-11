import styles from './Input.module.scss';

function Input({ placeholder, inputValue, setInputValue }) {
    return (
        <input
            className={styles.input}
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            placeholder={placeholder}
        />
    );
}

export default Input;
