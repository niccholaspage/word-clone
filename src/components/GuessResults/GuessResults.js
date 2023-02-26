import React from "react";

import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({guesses}) {
  return (
    <div className="guess-results">
      {guesses.map(guess => (
        <p key={guess.id} className="guess">{guess.label}</p>
      ))}
    </div>
  );
}

export default GuessResults;
