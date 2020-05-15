import React from 'react';

export default function Button(props) {
    function onClickHandler(e) {
        e.preventDefault();
        console.log(`Hi ${props.num}`);
        props.onButtonClick(props.num);
    }
    return (
        <button className='playButton' onClick={onClickHandler}>
            {props.num}
        </button>
    );
}