import React from 'react'

const DiceRoll = ({rollDice,currentDice}) => {

  return (
    <div className="dice_section">
      <div className="dice">
        <img
          src={require(`../assets/dice_${currentDice}.png`)}
          alt="dice"
          onClick={rollDice}
        />
      </div>
      <p>Click on Dice to roll</p>
    </div>
  );
}

export default DiceRoll;