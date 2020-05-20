import React, { useState, useEffect } from 'react';
import LeftPlaygound from './LeftPlayground';
import RightPlaygound from './RightPlaygound';
import { RoundCompleted } from './RoundCompleted';
import utils from '../Utils';

export default function App() {
  const [clickedButtons, setClickedButtons] = useState([]);
  const [frozenButtons, setFrozenButtons] = useState([]);
  const [wrongButtons, setWrongButtons] = useState([]);
  const [starsIds, setStarsIds] = useState([]);
  const [roundCompleted, setRoundCompleted] = useState(false);

  useEffect(
    checkClickedButtons,
    [clickedButtons]
  );

  useEffect(
    resetStars,
    [frozenButtons]
  );

  function checkClickedButtons() {
    const sumOfClickedButtons = clickedButtons.reduce((a,b) => a + b, 0);

    if (sumOfClickedButtons === 0
      || starsIds.length === 0) {
      return;
    }
    
    if (sumOfClickedButtons === starsIds.length) {
      setFrozenButtons([...frozenButtons,...clickedButtons]);
      setClickedButtons([]);
    }
    else if (sumOfClickedButtons > starsIds.length) {
      const wrongButton = clickedButtons[clickedButtons.length - 1];
      setWrongButtons([...wrongButtons, wrongButton]);
      setClickedButtons([]);
    }
  }

  function onButtonClick(i) {
    const numbersToCheck = [...clickedButtons, ...frozenButtons, ...wrongButtons];
    if (numbersToCheck.find(x => x === i) !== undefined) {
      return;
    }
    setClickedButtons([...clickedButtons, i]);
  }

  function resetStars() {
    const numbersToSkip = [...clickedButtons, ...frozenButtons, ...wrongButtons];
    const newStarsCount = utils.getStarsCount(numbersToSkip);
    if (newStarsCount === 0) {
      setRoundCompleted(true);
      return;
    }

    setStarsIds(utils.createRange(1, utils.getStarsCount(numbersToSkip)));
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

  function onResetClick() {
    setRoundCompleted(false);
    setClickedButtons([]);
    setFrozenButtons([]);
    setWrongButtons([]);
  }

  return (
    <div className='playGround'>
      <div className='body'>
        <LeftPlaygound onButtonClick={onButtonClick} getButtonColor={getButtonColor}/>
        {roundCompleted ? <RoundCompleted /> : <RightPlaygound starsIds={starsIds}/>}
      </div>
      <div className='reset'>
        <button onClick={onResetClick}>Reset</button>
      </div>
    </div>
  );
}