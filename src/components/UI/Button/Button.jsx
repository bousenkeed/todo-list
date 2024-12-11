import styles from './Button.module.scss';

function Button({
    children,
    type,
    onClick,
    variant = 'primary', // "primary", "secondary"
    className = '',
    style = {}
}) {
    const buttonClass = `${styles.button} ${styles[variant]} ${className}`.trim();
    console.log(buttonClass)
    return (
        <button className={buttonClass} type={type} onClick={onClick} style={style}>
            {children}
        </button>
    );
}

export default Button;
