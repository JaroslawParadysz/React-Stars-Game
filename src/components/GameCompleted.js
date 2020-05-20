import React from 'react';

function GameCompleted(props) {
    return(
        <div className='playGroundRoundCompleted'>
            <div className="gameCompleted">Game Completed</div>
            <div className="gameCompletedInfo">Points: <span style={{color:'green'}}>{props.points}</span></div>
            <div className="gameCompletedInfo">Mistakes: <span style={{color:'red'}}>{props.mistakes}</span></div>
        </div>
    );
}

export { GameCompleted };