import React, { useState, useEffect } from 'react';
import LeftPlaygound from './LeftPlayground';
import RightPlaygound from './RightPlaygound';
import RoundCompleted from './RoundCompleted';
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
      console.log(`${sumOfClickedButtons} === ${starsIds.length}`);
    }
    else if (sumOfClickedButtons > starsIds.length) {
      const wrongButton = clickedButtons[clickedButtons.length - 1];
      setWrongButtons([...wrongButtons, wrongButton]);
      setClickedButtons([]);
    }
  }

  function onButtonClick(i) { 
    if (clickedButtons.find(x => x === i) !== undefined
      || frozenButtons.find(x => x === i) !== undefined
      || wrongButtons.find(x => x === i) !== undefined) {
      return;
    }
    console.log('Button clicked!');
    setClickedButtons([...clickedButtons, i]);
  }

  function getStarsCount() {
    let newIds = utils.createRange(1, 9);
    newIds = newIds.filter(x => 
      clickedButtons.find(i => i === x) === undefined
      && wrongButtons.find(i => i === x) === undefined
      && frozenButtons.find(i => i === x) === undefined
    );
    let proposition = [...newIds];

    if (proposition.length === 0) {
      setRoundCompleted(true);
      return;
    }

    for (let i of newIds) {
      let c = newIds.filter(x => x !== i);
      for (let j of c) {
        if (i + j <= 9) {
          proposition.push(i + j);
        }
      }
    }

    proposition = [...new Set(proposition)]; 
    let index = Math.floor((proposition.length-1) * Math.random());
    return proposition[index];
  }

  function resetStars() {
    setStarsIds(utils.createRange(1, getStarsCount()));
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