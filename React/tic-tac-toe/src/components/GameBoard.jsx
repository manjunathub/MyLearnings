import React from 'react';
import GameButton from "./GameButton.jsx";



function GameBoard({activePlayer, setNextActivePlayer, board}) {
    // const [gameBoard, setGameBoard] = React.useState(initalStateBoard),

    /*const gameBoard = initalStateBoard;*/
    /*updateGameBoardCellSelection = (rowIndex, colIndex, symbol) => {
        if (!gameBoard[rowIndex][colIndex]) {

            setGameBoard((previousGameBoard) => {
                let newGameBoard = [...previousGameBoard].map((rowBoard) => [...rowBoard]);
                newGameBoard[rowIndex][colIndex] = symbol;
                return newGameBoard;
            });
            setNextActivePlayer(rowIndex, colIndex, gameBoard);
        }
    };*/
    const getColumns = (columns, rowIndex) => {
        return columns.map((column, index) => {
            return <GameButton key={`row_${rowIndex}_column_${index}`} colIndex={index} rowIndex={rowIndex}
                               symbol={activePlayer}
                               onClick={() => setNextActivePlayer(rowIndex, index)}>{column}</GameButton>
        });
    };



    return (
        <ol id="game-board">
            {
                board.map((row, index) => {
                    return <li key={"row_" + index}>
                        <ol>{getColumns(row, index)} </ol>
                    </li>;
                })
            }
        </ol>
    );
}

export default GameBoard;