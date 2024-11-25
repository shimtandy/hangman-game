import PlayButton from '../../components/playButton/PlayButton.jsx'
import styles from './Menu.module.css'
import logo from '/images/logo.svg'

function Menu() {
    return (
        <div className={styles.menu}>
            <img src={logo} />
            <PlayButton />
            <button 
                className="buttonOne"
                onClick={() => console.log("Clicked")}
            >How to Play</button>
            <button
                className="buttonTwo">
                    Test
                </button>

        </div>
    )
}

export default Menu