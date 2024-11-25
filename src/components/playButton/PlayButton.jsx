import buttonImage from '/images/icon-play.svg'
import styles from './PlayButton.module.css'

function PlayButton({additionalClasses}) {
    return (
        <button className={styles.playButton + additionalClasses}>
            <img src={buttonImage} />
        </button>
    )
}

export default PlayButton