import PlayButton from '../../components/playButton/PlayButton.jsx'
import ButtonOne from '../../components/buttonOne/ButtonOne.jsx'
import styles from './Menu.module.css'

function Menu() {
    return (
        <div className={styles.menu}>
            <h1 className="borderText"><span>The</span> <span className="gradientText">Hangman</span> <span>Game</span></h1>
            <PlayButton />
            <ButtonOne 
                text={'how to play'} 
                onClick={() => {console.log('clicked')}} 
            />
        </div>
    )
}

export default Menu