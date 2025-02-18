import styles from './MenuModal.module.css'

export default function MenuModal({gameState}) {
    let title = 'Paused'
    if (gameState === 'win') {
        title = 'You win'
    } else if (gameState === 'lose') {
        title = 'You lose'
    }
    return (
        <div className={styles.modal}>
            <div className={styles.menu}>
                <h1>{title}</h1>
            </div>
            
        </div>
    )
}