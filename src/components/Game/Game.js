import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessResults from "../GuessResults";
import GuessInput from "../GuessInput";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  function handleGuess(newGuess) {
    const nextGuess = { guess: newGuess, id: crypto.randomUUID() };
    setGuesses([...guesses, newGuess]);
  }

  return (
    <>
      <GuessResults answer={answer} guesses={guesses} />
      <GuessInput handleGuess={handleGuess} />
    </>
  );
}

export default Game;
