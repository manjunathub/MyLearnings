import React from 'react';

function GameButton({rowIndex, colIndex, symbol, onClick, children}) {
    const onClickHandler = () => {
        onClick(rowIndex, colIndex, symbol);
    }

    return (
        <button disabled={children !== null} onClick={onClickHandler}>{children}</button>
    );
}

export default GameButton;