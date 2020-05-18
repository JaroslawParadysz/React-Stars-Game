import React, { useState, useEffect } from 'react';
import LeftPlaygound from './LeftPlayground';
import RightPlaygound from './RightPlaygound';
import utils from '../Utils';

export default function App() {
  const [starsIds, setStarsIds] = useState(utils.generateRandomRange(1,9));
  const [stars, setStars] = useState(createStars(starsIds));

  function createStars(ids) {
    const stars = [];
    for(let i in ids) {
      stars.push({id: i, clicked: false});
    }

    return stars;
  }

  function onButtonClick(i) {    
    stars[i - 1].clicked = true;
    const newState = [];
    for (let j = 0; j < stars.length; j++) {
      newState.push(stars[j]);
    }
    setStars(newState);
  }

  function isClicked(i) {
    return stars[i - 1].clicked;
  }

  function resetState() {
    setStarsIds(utils.generateRandomRange(1,9));
    setStars(createStars(starsIds));
  }

  return (
    <div className='playGround'>
      <div className='body'>
        <LeftPlaygound onButtonClick={onButtonClick}/>
        <RightPlaygound isClicked={isClicked} starsIds={starsIds}/>
      </div>
      <div className='reset'>
        <button onClick={resetState}>Reset</button>
      </div>
    </div>
  );
}