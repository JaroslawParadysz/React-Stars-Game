import React from 'react';
import Button from './Button';
import Utils from '../Utils';

export default function() {
    const buttons = Utils.createRange();
    return(
        <div className='playgoundLeftPart'>
          {buttons.map(x => <Button key={x} num={x}/>)}
        </div>
    );
}