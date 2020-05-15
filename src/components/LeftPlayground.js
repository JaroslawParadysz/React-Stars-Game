import React from 'react';
import Button from './Button';

export default function() {
    const buttons = CreateRange();
    return(
        <div className='playgoundPart'>
          {buttons.map(x => <Button key={x} num={x}/>)}
        </div>
    );
}

function CreateRange() {
    const buttons = [];
    for(let i = 1; i < 10; i++) {
      buttons.push(i);
    }
  
    return buttons;
  }