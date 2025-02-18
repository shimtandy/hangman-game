import styles from './LetterButton.module.css'

function handlePress(letter, answer, setGuessed, guessed, setLives) {
    if (guessed.get(letter)) {
        return
    } else if (!answer.toUpperCase().includes(letter)){
        setLives(lives => lives - 1)
    }

    let newGuessed = new Map(guessed)
    newGuessed.set(letter, true)
    setGuessed(newGuessed)
}

export default function LetterButton({letter, setGuessed, answer, guessed, setLives}) {

    return (
        <button 
            className={styles.letter + ' ' + (guessed.get(letter) ? styles.guessed : null)} 
            onClick={() => handlePress(letter, answer, setGuessed, guessed, setLives)}>
                {letter}
        </button>
    )
}