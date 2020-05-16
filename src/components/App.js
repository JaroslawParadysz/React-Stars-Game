import React, { useState, useEffect } from 'react';
import LeftPlaygound from './LeftPlayground';
import RightPlaygound from './RightPlaygound';

export default function App() {
  const [state, setState] = useState(createStars());
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${numberOfClicks}`;
  },
  [numberOfClicks]);

  function createStars() {
    const stars = [];
    for (let i = 1; i < 10; i++ ) {
      stars.push({id: i, clicked: false});
    }

    return stars;
  }

  function onButtonClick(i) {    
    state[i - 1].clicked = true;
    console.log(state[i - 1]);
    const newState = [];
    for (let j = 0; j < state.length; j++) {
      newState.push(state[j]);
    }
    setState(newState);
    setNumberOfClicks(numberOfClicks + 1);
  }

  function isClicked(i) {
    return state[i - 1].clicked;
  }

  function resetState() {
    setState(createStars());
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