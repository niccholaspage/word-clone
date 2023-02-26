import React from "react";

function Banner({status, guessCount, answer}) {
  return (
    <div className={`${status} banner`}>
      <p>
      {status === "happy" ? 
        <>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{guessCount} guesses</strong>.
        </>
        :
        <>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </>
        }
      </p>
    </div>
  );
}

export default Banner;
