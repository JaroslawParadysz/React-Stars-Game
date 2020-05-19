import React, { useState, useEffect } from 'react';
import LeftPlaygound from './LeftPlayground';
import RightPlaygound from './RightPlaygound';
import utils from '../Utils';

export default function App() {
  const [starsIds, setStarsIds] = useState(utils.generateRandomRange(1,9));
  const [stars, setStars] = useState(createStars(starsIds));

  const [clickedButtons, setClickedButtons] = useState([]);
  const [frozenButtons, setFrozenButtons] = useState([]);
  const [wrongButtons, setWrongButtons] = useState([]);

  useEffect(() => {
    checkClickedButtons();
  }, [clickedButtons, frozenButtons, wrongButtons]);

  function createStars(ids) {
    const stars = [];
    for(let i in ids) {
      stars.push({id: i, clicked: false});
    }

    return stars;
  }

  function checkClickedButtons() {
    console.log(`Clicked buttons: ${clickedButtons}`);
    console.log(`Wrong buttons: ${wrongButtons}`);
    console.log(`Frozen buttons: ${frozenButtons}`);

    const sumOfClickedButtons = clickedButtons.reduce((a,b) => a + b, 0);
    console.log(`sumOfClickedButtons: ${sumOfClickedButtons}`);
    console.log(`stars.length: ${stars.length}`);
    if (sumOfClickedButtons === stars.length) {
      setFrozenButtons([...frozenButtons,...clickedButtons]);
      setClickedButtons([]);
      resetStars();
    }
    else if (sumOfClickedButtons > stars.length) {
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
    const newClickedButtons = [...clickedButtons, i];
    setClickedButtons(newClickedButtons);
  }

  function resetStars() {
    setStarsIds(utils.generateRandomRange(1,9));
    console.log(starsIds);
    setStars(createStars(starsIds));
  }

  return (
    <div className='playGround'>
      <div className='body'>
        <LeftPlaygound onButtonClick={onButtonClick}/>
        <RightPlaygound starsIds={starsIds}/>
      </div>
      <div className='reset'>
        <button onClick={resetStars}>Reset</button>
      </div>
    </div>
  );
}