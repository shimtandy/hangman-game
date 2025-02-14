import { Link } from "react-router";
import NavBar from "../../components/navBar/navBar";
import styles from './Categories.module.css';

export default function Categories() {
    return (
        <div className={styles.container}>
            <NavBar title='Pick a Category' />
            <div className={styles.categories}>
                <Link to="/play/movies" className={'buttonOne ' + styles.category}>Movies</Link>
                <Link to="/play/tv-shows" className={'buttonOne ' + styles.category}>TV Shows</Link>
                <Link to="/play/countries" className={'buttonOne ' + styles.category}>Countries</Link>
                <Link to="/play/capital-cities" className={'buttonOne ' + styles.category}>Capital Cities</Link>
                <Link to="/play/animals" className={'buttonOne ' + styles.category}>Animals</Link>
                <Link to="/play/sport" className={'buttonOne ' + styles.category}>Sport</Link>
            </div>
        </div>
    )
}