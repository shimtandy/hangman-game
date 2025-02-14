import { useState } from "react"

export default function LetterButton({letter, setGuessed}) {

    return (
        <button onClick={() => setGuessed(letter)}>{letter}</button>
    )
}