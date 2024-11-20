import styles from './ButtonOne.module.css'

function ButtonOne({text, onClick}) {
    return (
        <button 
            className={styles.button} 
            onClick={onClick}>
                <span>{text}</span>
        </button>
    )
}

export default ButtonOne