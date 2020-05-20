import React from 'react';

function GameCompleted(props) {
    return(
        <div className='playGroundRoundCompleted'>
            <div className="gameCompleted">Game Completed</div>
            <div className="gameCompletedInfo">Points: {props.points}</div>
            <div className="gameCompletedInfo">Mistakes: {props.mistakes}</div>
        </div>
    );
}

export { GameCompleted };