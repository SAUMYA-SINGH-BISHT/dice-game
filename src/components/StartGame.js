import React from "react";
import dice from "../assets/dices.png";
import { useNavigate } from 'react-router-dom';

const StartGame = () => {

  const navigate = useNavigate();

  function gamePage() {
    navigate('/game');
  }
  return (
    <div className="container">
      <div>
        <img src={dice} alt="dice" />
      </div>
      <div className="heading">
        <h1>DICE GAME</h1>
        <button onClick={gamePage}>Play Now</button>
      </div>
    </div>
  );
};

export default StartGame;
