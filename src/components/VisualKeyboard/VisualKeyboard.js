import React from "react";

const KEYBOARD_LAYOUT = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"]
];

function VisualKeyboard({guesses}) {
  const characterToStatusMap = new Map();

  for (const guess of guesses) {
    const result = guess.result;

    for (const item of result) {
      characterToStatusMap.set(item.letter, " " + item.status);
    }
  }

  return (
    <div className="keyboard">
      {KEYBOARD_LAYOUT.map((row, index) => (
        <div className="row" key={index}>
          {row.map(character => (
            <button className={`cell` + (characterToStatusMap.get(character) ?? "")} key={character}>{character}</button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default VisualKeyboard;
