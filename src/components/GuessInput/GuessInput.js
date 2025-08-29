import React from "react";

function GuessInput({ handleGuess }) {
  const [guess, setGuess] = React.useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        handleGuess(guess);
        setGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        value={guess}
        onChange={(event) => {
          const letter = event.target.value;
          setGuess(letter.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
