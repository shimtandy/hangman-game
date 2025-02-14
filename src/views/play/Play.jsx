import { useParams } from "react-router"
import menuIcon from '/images/icon-menu.svg'
import styles from './Play.module.css'

export default function Play() {
    let { category } = useParams()
    let title = category.split('-').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');

    return (
        <div>
            <header className={styles.header}>
                <button className={styles.menuButton} onClick={() => window.history.back()}>
                    <img src={menuIcon} />
                </button>
                <h1 className={styles.heading}>{title}</h1>
            </header>
        </div>
    )
}