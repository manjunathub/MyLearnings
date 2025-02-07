import React from 'react';

function GameOver({winner, onRematch}) {
    return (
        <div id="game-over">
            <h2>Game Over</h2>
            <p>{winner? `${winner} won!!!`: 'Game Draw'} </p>
            <button onClick={onRematch}>Rematch</button>
        </div>
    );
}

export default GameOver;