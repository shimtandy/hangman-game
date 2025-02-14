import buttonImage from '/images/icon-play.svg'
import styles from './PlayButton.module.css'
import { Link } from 'react-router'

function PlayButton({additionalClasses}) {
    return (
        <Link to='/categories' className={styles.playButton + additionalClasses}>
            <img src={buttonImage} />
        </Link>
    )
}

export default PlayButton