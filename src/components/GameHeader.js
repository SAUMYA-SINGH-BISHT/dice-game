import React from "react";

const GameHeader = ({ score, selectedNumber, setSelectedNumber }) => {
  const value = [1, 2, 3, 4, 5, 6];
  return (
    <div className="game-header">
      <div className="score">
        <div>{score}</div>
        <p>Total Score</p>
      </div>
      <div className="digits">
        {value.map((val, idx) => (
          <div
            className={val === selectedNumber ? "selected" : "digit"}
            id={idx}
            onClick={() => {
              setSelectedNumber(val);
            }}
          >
            {val}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameHeader;
