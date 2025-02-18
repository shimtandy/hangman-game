import { Link } from 'react-router'
import styles from './MenuModal.module.css'

export default function MenuModal({gameState, setPaused}) {
    let title = 'Paused'
    if (gameState === 'win') {
        title = 'You win'
    } else if (gameState === 'lose') {
        title = 'You lose'
    }
    return (
        <div className={styles.modal}>
            <div className={styles.menu}>
                <h1 className={styles.title + ' gradientText'}>{title}</h1>
                <button 
                    className='buttonOne'
                    onClick={() => setPaused(false)}>Continue</button>
                <Link className='buttonOne' to='/categories'>New Category</Link>
                <Link className='buttonTwo' to='/'>Quit</Link>
            </div>
            
        </div>
    )
}