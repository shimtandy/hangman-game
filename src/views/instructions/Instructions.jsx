import { Link } from "react-router"

function Instructions() {
    return (
        <>
        <nav>
            <Link to='/'>Back</Link>
            <h1>How to Play</h1>
        </nav>

        <main>
            <ol>
                <li>
                    <div>01</div>
                    <h2>First, choose a word category, like animals or movies. 
                        The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.</h2>
                </li>
                <li>
                    <div>02</div>
                    <h2>Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct.
                         If it's wrong, you lose some health, which empties after eight incorrect guesses.</h2>
                </li>
                <li>
                    <div>03</div>
                    <h2>You win by guessing all the letters in the word before your health runs out. 
                        If the health bar empties before you guess the word, you lose.</h2>
                </li>
            </ol>
        </main>
        </>
    )
}

export default Instructions