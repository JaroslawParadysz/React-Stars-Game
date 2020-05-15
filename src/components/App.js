import React, { useState } from 'react';
import LeftPlaygound from './LeftPlayground';
import RightPlaygound from './RightPlaygound';

export default function App() {
  function createStars(){
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
  }

  function isClicked(i) {
    return state[i - 1].clicked;
  }


  const [state, setState] = useState(createStars());
  return (
    <div className='playGround'>
      <div className='body'>
        <LeftPlaygound onButtonClick={onButtonClick}/>
        <RightPlaygound isClicked={isClicked}/>
      </div>
    </div>
  );
}