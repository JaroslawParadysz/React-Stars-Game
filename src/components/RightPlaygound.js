import React from 'react';
import Star from './Star';
import Utils from '../Utils';

export default function(props) {
    const stars = Utils.createRange();
    return (
        <div className='playgoundRightPart'>
            {stars.map(x => <Star key={x} num={x} isClicked={props.isClicked} />)}
        </div>
    );
};