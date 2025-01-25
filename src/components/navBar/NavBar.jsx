import { Link } from "react-router";
import styles from './NavBar.module.css'
import backIcon from '/images/icon-back.svg'

export default function NavBar({ title }) {
    return (
        <nav className={styles.navBar + " gradientText borderText"}>
            
            <Link className={styles.backButton} to='/'><img src={backIcon}/></Link>
            <h1>{title}</h1>
            
        </nav>
    )
}