import { useParams } from "react-router"
import menuIcon from '/images/icon-menu.svg'
import styles from './Play.module.css'
import data from '../../data.json'
import LetterButton from "../../components/letterButton/LetterButton"
import { useState } from "react"

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Categories are to be taken from the URL in an URL compatible format. This converts them to an index in the data.json file.
function getCategoryIndex(category) {
    switch (category) {
        case 'movies':
            return 'Movies';
        case 'tv-shows':
            return 'TV Shows';
        case 'countries':
            return 'Countries';
        case 'capital-cities':
            return 'Capital Cities';
        case 'animals':
            return 'Animals';
        case 'sport':
            return 'Sport';
    }
}

function chooseRandomWord(words) {
    let randomIndex = Math.floor(Math.random() * words.length)
    return words[randomIndex]
}

function createNewGuessArray(currentGuesses, newGuess) {
    let newGuesses = new Map(currentGuesses)
    newGuesses.set(newGuess, true)
    return newGuesses
}

export default function Play() {
    let [guesses, setGuesses] = useState(new Map([...ALPHABET].map(letter => [letter, false])))

    let { category } = useParams()
    let title = category.split('-').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
    let words = data.categories[getCategoryIndex(category)]
    let word = chooseRandomWord(words)
    
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <button className={styles.menuButton} onClick={() => window.history.back()}>
                    <img src={menuIcon} />
                </button>
                <h1 className={styles.heading}>{title}</h1>
            </header>

            <main> 
                {[...ALPHABET].map(letter => 
                    <LetterButton key={letter} 
                                  letter={letter} 
                                  setGuessed={() => setGuesses(createNewGuessArray(guesses, letter))}
                                  guessed={guesses.get(letter)} />)}
            </main>
        </div>
    )
}