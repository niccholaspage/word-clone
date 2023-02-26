import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Banner from '../Banner/Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameState, setGameState] = React.useState("playing");

  const handleSubmitGuess = (label) => {
    const result = checkGuess(label, answer);

    const nextGuesses = [...guesses, {
      id: crypto.randomUUID(),
      label,
      result
    }];

    setGuesses(nextGuesses);

    if (label === answer) {
      setGameState("won");
    } else if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGameState("loss");
    }
  }

  const bannerStatus = gameState === "won" ? "happy" : "sad";

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput disabled={gameState !== "playing"} onSubmitGuess={handleSubmitGuess} />
      {gameState !== "playing" && <Banner status={bannerStatus} guessCount={guesses.length} answer={answer} />}
    </>
  );
}

export default Game;
