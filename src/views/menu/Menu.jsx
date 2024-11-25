import PlayButton from '../../components/playButton/PlayButton.jsx'
import styles from './Menu.module.css'
import logo from '/images/logo.svg'

function Menu() {
    return (
        <div className={"menuBackground " + styles.menuLayout}>
            <img src={logo} className={styles.logo} />
            <PlayButton additionalClasses={' ' + styles.playButton}/>
            <button 
                className={"buttonOne " + styles.howToPlay}
                onClick={() => console.log("Clicked")}
            >How to Play</button>

        </div>
    )
}

export default Menu