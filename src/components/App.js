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
    let c = state[i - 1];
    console.log(c);
  }
  const [state, setState] = useState(createStars());
  return (
    <div className='playGround'>
      <div className='body'>
        <LeftPlaygound onButtonClick={onButtonClick}/>
        <RightPlaygound />
      </div>
    </div>
  );
}