import React from 'react'

const Rules = () => {
  return (
    <div className="rules">
      <div className="rule">
        <h2>How to play dice game</h2>
        <ul>
          <li>Select any number</li>
          <li>Click on dice image</li>
          <li>
            After click on dice if selected number is equal to dice number you
            will get same point as dice.
          </li>
          <li>if you get wrong guess then 2 point will be dedcuted </li>
        </ul>
      </div>
    </div>
  );
}

export default Rules;