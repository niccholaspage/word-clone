import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({guess});

    setGuess("");
  }

  return (
    <form onSubmit={handleSubmit} class="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input required pattern=".{5,5}" maxLength={5} value={guess} onChange={(event) => setGuess(event.target.value.toUpperCase())} id="guess-input" type="text" />
    </form>
  );
}

export default GuessInput;
