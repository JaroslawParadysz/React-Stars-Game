import React from 'react';

export default function Button(props) {
    return (
        <button className='playButton'>
            {props.num}
        </button>
    );
}