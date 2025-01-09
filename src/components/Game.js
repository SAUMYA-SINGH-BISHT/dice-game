import React, { useState } from "react";
import GameHeader from "./GameHeader";
import DiceRoll from "./DiceRoll";
import Rules from "./Rules";
const Game = () => {
  const [score, setScore] = useState(0);
  const [showRules, setShowRules] = useState(false);
  const [currentDice, setCurrentDice] = useState(1);
  const [selectedNumber, setSelectedNumber] = useState();

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setCurrentDice(randomNumber);

    if (selectedNumber === randomNumber)
      setScore((prev) => prev + selectedNumber);
  
  };

  return (
    <div>
      <GameHeader score={score} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
      <DiceRoll rollDice={rollDice} currentDice={currentDice} setCurrentDice={selectedNumber} />
      <div className="btn">
        <button className="btn1" onClick={() => setScore(0)}>
          Reset Score
        </button>
        <button
          className="btn2"
          onClick={() => {
            setShowRules(!showRules);
          }}
        >
          Show Rules
        </button>
      </div>
      {showRules && <Rules />}
    </div>
  );
};

export default Game;
