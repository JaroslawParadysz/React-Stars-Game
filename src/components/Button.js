import React from 'react';

export default function Button(props) {
    function onClickHandler(e) {
        e.preventDefault();
        props.onButtonClick(props.num);
    }
    return (
        <button className='playButton' 
            onClick={onClickHandler} 
            style={{backgroundColor: props.getButtonColor(props.num)}}>
            {props.num}
        </button>
    );
}