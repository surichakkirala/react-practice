import { useState } from "react";

const NumberGuess = () => {
  const randomNumber = () => Math.floor(Math.random() * 100);
  const [numToGuess, setNumToGuess] = useState(randomNumber);
  console.log(numToGuess);
  const [guess, setGuess] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState("");
  const handleGuess = () => {
    const num = parseInt(guess);
    if (isNaN(num) || num < 1 || num > 100) {
      setMessage("Please enter a number between 1 and 100");
      return;
    }
    setAttempts(attempts + 1);
    if (num === numToGuess) {
      setMessage(
        `Congratulations! You guessed the number in ${attempts} attempts`
      );
    } else if (num < numToGuess) {
      setMessage("Too low! Try again");
    } else {
      setMessage("Too high! Try again");
    }
  };

  // Function to reset the game
  const resetGame = () => {
    setNumToGuess(randomNumber);
    setGuess("");
    setAttempts(0);
    setMessage("");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "50px 0",
      }}
    >
      <h2>Guess the Number</h2>
      <input
        id="guess-input"
        placeholder="Enter a number between 1 and 100"
        style={{ width: "300px", padding: "5px" }}
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
      <div
        style={{
          margin: "15px 0",
          display: "flex",
          width: "200px",
          justifyContent: "space-around",
        }}
      >
        <button onClick={handleGuess}>Check Guess</button>
        <button onClick={resetGame}> Reset Game</button>
      </div>
      {message}
    </div>
  );
};

export default NumberGuess;
