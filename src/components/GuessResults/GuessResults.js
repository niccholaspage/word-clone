import React from "react";

import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({guesses}) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map(index => {
        const guess = guesses[index];

        return (
          <p key={index} className="guess">
            {range(0, 5).map(column => {
              const additionalClass = guess !== undefined ? " " + guess.result[column].status : "";
              return (
                <span key={column} className={"cell" + additionalClass}>
                  {guess !== undefined ? guess.label.charAt(column) : undefined}
                </span>
              );
            }
            )}
          </p>
        );
      })}
    </div>
  );
}

export default GuessResults;
