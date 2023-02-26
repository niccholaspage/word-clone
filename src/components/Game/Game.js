import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import { checkGuess } from '../../game-helpers';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const handleSubmitGuess = (label) => {
    const result = checkGuess(label, answer);

    setGuesses([...guesses, {
      id: crypto.randomUUID(),
      label,
      result
    }]);
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput onSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
