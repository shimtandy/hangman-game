import styles from './LetterButton.module.css'


export default function LetterButton({letter, setGuessed, guessed}) {

    return (
        <button className={guessed ? styles.guessed : null} onClick={setGuessed}>{letter}</button>
    )
}