import React, { useState, useEffect } from 'react';
import LeftPlaygound from './LeftPlayground';
import RightPlaygound from './RightPlaygound';
import utils from '../Utils';

export default function App() {
  const [starsIds, setStarsIds] = useState(utils.generateRandomRange(1,9));
  const [stars, setStars] = useState(createStars(starsIds));
  const [clickedButtons, setClickedButtons] = useState([]);
  const [frozenButtons, setFrozenButtons] = useState([]);

  function createStars(ids) {
    const stars = [];
    for(let i in ids) {
      stars.push({id: i, clicked: false});
    }

    return stars;
  }

  function onButtonClick(i) { 
    if (clickedButtons.find(x => x === i) !== undefined) {
       return;
    }
    let newClickedButtons = new [...clickedButtons];
    newClickedButtons.push(i);
    setClickedButtons(newClickedButtons);

    if (clickedButtons.reduce((a,b) => a+b, 0) !== stars.length) {
      return;
    }
    setFrozenButtons([...clickedButtons]);
    resetStars();
  }

  function isClicked(i) {
    return stars[i - 1].clicked;
  }

  function resetStars() {
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
        <button onClick={resetStars}>Reset</button>
      </div>
    </div>
  );
}