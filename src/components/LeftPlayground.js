import React from 'react';
import Button from './Button';
import Utils from '../Utils';

export default function(props) {
    const buttons = Utils.createRange(1,9);
    return(
        <div className='playgoundLeftPart'>
          {buttons.map(x => <Button 
              key={x} 
              num={x} 
              onButtonClick={props.onButtonClick} 
              getButtonColor={props.getButtonColor}/>
            )}
        </div>
    );
}