import PlayButton from '../../components/playButton/PlayButton.jsx'
import ButtonOne from '../../components/buttonOne/ButtonOne.jsx'
import styles from './Menu.module.css'
import logo from '/images/logo.svg'

function Menu() {
    return (
        <div className={styles.menu}>
            <img src={logo} />
            <PlayButton />
            <ButtonOne 
                text={'how to play'} 
                onClick={() => {console.log('clicked')}} 
            />
        </div>
    )
}

export default Menu