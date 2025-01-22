import { Link } from 'react-router'
import PlayButton from '../../components/playButton/PlayButton.jsx'
import styles from './Menu.module.css'
import logo from '/images/logo.svg'

function Menu() {
    return (
        <div className={"menuBackground " + styles.menuLayout}>
            <img src={logo} className={styles.logo} />
            <PlayButton additionalClasses={' ' + styles.playButton}/>
            <Link className={"buttonOne " + styles.howToPlay} to='/instructions'>How to Play</Link>
        </div>
    )
}

export default Menu