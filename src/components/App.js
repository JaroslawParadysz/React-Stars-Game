import React, { useState, useEffect } from 'react';
import LeftPlaygound from './LeftPlayground';
import RightPlaygound from './RightPlaygound';

export default function App() {
  const [numberOfStars, setNumberOfStars] = useState(createStars());

  function createStars() {
    const stars = [];
    for (let i = 1; i < 10; i++ ) {
      stars.push({id: i, clicked: false});
    }

    return stars;
  }

  function onButtonClick(i) {    
    numberOfStars[i - 1].clicked = true;
    const newState = [];
    for (let j = 0; j < numberOfStars.length; j++) {
      newState.push(numberOfStars[j]);
    }
    setNumberOfStars(newState);
  }

  function isClicked(i) {
    return numberOfStars[i - 1].clicked;
  }

  function resetState() {
    setNumberOfStars(createStars());
  }

  return (
    <div className='playGround'>
      <div className='body'>
        <LeftPlaygound onButtonClick={onButtonClick}/>
        <RightPlaygound isClicked={isClicked}/>
      </div>
      <div className='reset'>
        <button onClick={resetState}>Reset</button>
      </div>
    </div>
  );
}