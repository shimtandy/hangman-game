import NavBar from "../../components/navBar/NavBar.jsx"
import styles from './Instructions.module.css'

function Instructions() {
    return (
        <div className={styles.layout}>
            <NavBar title='How to Play' />

            <main>
                <ol className={styles.instructionList}>
                    <li>
                        <div className={styles.instructionNum}>01</div>
                        <h2 className={styles.instructionHeading}>Choose a category</h2>
                        <p className={styles.instructionBody}>First, choose a word category, like animals or movies. 
                            The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.</p>
                    </li>
                    <li>
                        <div className={styles.instructionNum}>02</div>
                        <h2 className={styles.instructionHeading}>Guess letters</h2>
                        <p className={styles.instructionBody}>Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct.
                            If it's wrong, you lose some health, which empties after eight incorrect guesses.</p>
                    </li>
                    <li>
                        <div className={styles.instructionNum}>03</div>
                        <h2 className={styles.instructionHeading}>Win or lose</h2>
                        <p className={styles.instructionBody}>You win by guessing all the letters in the word before your health runs out. 
                            If the health bar empties before you guess the word, you lose.</p>
                    </li>
                </ol>
            </main>
        </div>
    )
}

export default Instructions