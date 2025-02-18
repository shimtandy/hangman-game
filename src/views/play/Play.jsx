import { useParams } from "react-router"
import menuIcon from '/images/icon-menu.svg'
import heartIcon from '/images/icon-heart.svg'
import styles from './Play.module.css'
import data from '../../data.json'
import LetterButton from "../../components/letterButton/LetterButton"
import { useMemo, useState } from "react"
import MenuModal from "../../components/menuModal/MenuModal"

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
            return 'Sports';
    }
}

function chooseRandomWord(words) {
    let randomIndex = Math.floor(Math.random() * words.length)
    return words[randomIndex]
}


function createAnswerDisplay(answer, guesses) {
    let letterLists = []

    for (let word of answer.split(' ')) {
        let letterListItems = []

        for (let letter of word) {
            if (guesses.get(letter.toUpperCase())) {
                letterListItems.push(<li className={styles.displayLetter}>{letter}</li>)
            } else {
                letterListItems.push(<li className={styles.displayLetter + ' ' + styles.letterHidden}>_</li>)
            } 
        }

        letterLists.push(<ol className={styles.displayWord}>{letterListItems}</ol>)
    }

    if (letterLists.length > 1) {
        let finalDisplay = []

        for (let letterList of letterLists) {
            finalDisplay.push(<li>{letterList}</li>)
        }
        return <ol className={styles.displayWords}>{finalDisplay}</ol>
    } else {
        return letterLists[0]
    }
}


export default function Play() {
    let [guesses, setGuesses] = useState(new Map([...ALPHABET].map(letter => [letter, false])))
    let [lives, setLives] = useState(8)
    let [paused, setPaused] = useState(false)
    let { category } = useParams()
    let word = useMemo(() => {
        let words = data.categories[getCategoryIndex(category)]
        return chooseRandomWord(words)
    }, [])
    let title = category.split('-').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');

    let answerDisplay = createAnswerDisplay(word['name'], guesses)

    let win = word.name.split('').map(letter => guesses.get(letter.toUpperCase())).reduce((accumulator, current) => accumulator && current, true)
    
    let menu = null;
    if (paused) {
        menu = <MenuModal gameState='paused' setPaused={setPaused} />
    } else if (lives === 0) {
        menu = <MenuModal gameState='lose' setPaused={setPaused} />
    } else if (win) {
        menu = <MenuModal gameState='win' setPaused={setPaused} />
    }

    return (
        <div className={styles.container}>
            {menu}
            <header className={styles.header}>
                <button className={styles.menuButton} onClick={() => setPaused(true)}>
                    <img src={menuIcon} />
                </button>
                <h1 className={styles.heading}>{title}</h1>

                <progress className={styles.lifeBar} max='8' value={lives}></progress>
                <img src={heartIcon} className={styles.heartIcon} />
            </header>

            <main className={styles.gameArea}> 
                <div className={styles.answerDisplay}>
                    {answerDisplay}
                </div>
                <div className={styles.keyboard}>
                    {[...ALPHABET].map(letter => 
                        <LetterButton 
                                    key={letter} 
                                    letter={letter} 
                                    answer={word.name}
                                    setGuessed={setGuesses}
                                    guessed={guesses}
                                    setLives={setLives} 
                        />)}
                </div>
            </main>
        </div>
    )
}