import buttonImage from '/images/icon-play.svg'
import styles from './PlayButton.module.css'

function PlayButton() {
    return (
        <button className={styles.playButton}>
            <img src={buttonImage} />
        </button>
    )
}

export default PlayButton