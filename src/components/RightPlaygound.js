import React from 'react';
import Star from './Star';
import Utils from '../Utils';

export default function(props) {
    return (
        <div className='playgoundRightPart'>
            {props.starsIds.map(x => <Star key={x} num={x} />)}
        </div>
    );
};