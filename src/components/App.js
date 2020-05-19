import React, { useState, useEffect } from 'react';
import LeftPlaygound from './LeftPlayground';
import RightPlaygound from './RightPlaygound';
import utils from '../Utils';

export default function App() {
  const [starsIds, setStarsIds] = useState(utils.generateRandomRange(1,9));

  const [clickedButtons, setClickedButtons] = useState([]);
  const [frozenButtons, setFrozenButtons] = useState([]);
  const [wrongButtons, setWrongButtons] = useState([]);

  useEffect(
    checkClickedButtons,
    [clickedButtons]
  );

  function checkClickedButtons() {

    const sumOfClickedButtons = clickedButtons.reduce((a,b) => a + b, 0);
    //console.log(`sumOfClickedButtons: ${sumOfClickedButtons}`);
    //console.log(`Stars: ${starsIds}`);
    
    if (sumOfClickedButtons === starsIds.length) {
      setFrozenButtons([...frozenButtons,...clickedButtons]);
      setClickedButtons([]);
      resetStars();
    }
    else if (sumOfClickedButtons > starsIds.length) {
      const wrongButton = clickedButtons[clickedButtons.length - 1];
      const newClickedButtons = clickedButtons.filter(x => x !== wrongButton);

      setWrongButtons([...wrongButtons, wrongButton]);
      setClickedButtons(newClickedButtons);
    }
  }

  function onButtonClick(i) { 
    if (clickedButtons.find(x => x === i) !== undefined) {
      return;
    }
    setClickedButtons([...clickedButtons, i]);
  }

  function resetStars() {
    setStarsIds(utils.generateRandomRange(1,9));
  }

  function getButtonColor(i) {
    if (clickedButtons.find(x => x === i) !== undefined) {
      return 'blue';
    }
    else if (frozenButtons.find(x => x === i) !== undefined) {
      return 'green';
    }
    else if (wrongButtons.find(x => x === i) !== undefined) {
      return 'red'
    }

    return '#eee';
  }

  return (
    <div className='playGround'>
      <div className='body'>
        <LeftPlaygound onButtonClick={onButtonClick} getButtonColor={getButtonColor}/>
        <RightPlaygound starsIds={starsIds}/>
      </div>
      <div className='reset'>
        <button onClick={resetStars}>Reset</button>
      </div>
    </div>
  );
}