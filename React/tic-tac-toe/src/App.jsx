import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import {useState} from "react";
import Log from "./components/Log.jsx";
import GameOver from "./components/GameOver.jsx";

let initalStateBoard = [
    [null, null, null], [null, null, null], [null, null, null]
]

function checkHorizontal(gameBoard) {
    let len = gameBoard.length;
    while (len--) {
        let row = gameBoard[len],
            colLen = row.length,
            currentSelection = row[0],
            isMatch = true;
        while (colLen--) {
            if (!currentSelection || currentSelection !== row[colLen]) {
                isMatch = false;
                break;
            }
        }
        if (isMatch) {
            return currentSelection;
        }
    }
    return false;
}

function checkVertical(gameBoard) {
    let len1 = gameBoard.length,
        len2 = len1;

    for (let i = 0; i < len2; i++) {
        let currentSelection = gameBoard[0][i],
            isMatch = true;
        for (let j = 0; j < len2; j++) {
            if (!currentSelection || currentSelection !== gameBoard[j][i]) {
                isMatch = false;
                break;
            }
        }
        if (isMatch) {
            return currentSelection;
        }
    }
    return false;
}

function checkDiagonally(gameBoard) {
    let len = gameBoard.length,
        currentSelection = gameBoard[0][0],
        isMatch = true;

    for (let i = 1; i < len; i++) {
        if (!currentSelection || currentSelection !== gameBoard[i][i]) {
            isMatch = false;
            break;
        }
    }

    if (isMatch) {
        return currentSelection;
    }
    len = gameBoard.length;
    currentSelection = gameBoard[len - 1][0];
    isMatch = true;

    for (let i = 1; i <= len; i++) {
        if (currentSelection !== gameBoard[len - i][i - 1]) {
            isMatch = false;
            break;
        }
    }
    if (isMatch) {
        return currentSelection;
    }
    return false;
}

function getActivePlayer(gameTurn) {
    let activePlayer = 'X';
    if (gameTurn && gameTurn.length > 0 && gameTurn[0].activePlayer === 'X') {
        activePlayer = 'O';
    }
    return activePlayer;
}

function App() {
    // const [activePlayer, setActivePlayer] = useState('X');
    const [gameTurns, setGameTurns] = useState([]),
        gameBoard = [...initalStateBoard.map((arr) => [...arr])],
        [players, setPlayers] = useState({
            X: 'Player1',
            O: 'Player2',
        }),
        setNextActivePlayer = (rowIndex, colIndex) => {
            // setActivePlayer((currentActivePlayer) => {
            //     return currentActivePlayer === 'X' ? 'O' : 'X';
            // });
            setGameTurns((prevGameTurn) => {
                /**
                 * It is not good practice to depend on other state when setting other state
                 */
                /*let nextActivePlayer = 'X';
                if (prevGameTurn && prevGameTurn.length > 0 && prevGameTurn[0].activePlayer === 'X') {
                    nextActivePlayer = 'O';
                }*/

                const cloneOfGameTurn = [{
                    rowIndex: rowIndex,
                    colIndex: colIndex,
                    // activePlayer: nextActivePlayer,
                    activePlayer: getActivePlayer(prevGameTurn),
                }, ...prevGameTurn];
                return cloneOfGameTurn;
            });

            // setGameTurns(cloneOfGameTurn);
        },
        doReMatch = function () {
            setGameTurns([]);
        },
        onPlayerNameUpdated = (symbol, name) => {
            setPlayers((prevPlayers) => {
                return {...prevPlayers, [symbol]: name}
            });
        }
    // let activePlayer = 'X',
    let activePlayer = getActivePlayer(gameTurns),
        isActivePlayer = false;
    /*if (gameTurns.length > 0 && gameTurns[0].activePlayer === 'X') {
        activePlayer = 'O';
    }*/

    for (let turn of gameTurns) {
        gameBoard[turn.rowIndex][turn.colIndex] = turn.activePlayer;
    }
    let selectedPlayer = false;
    if (gameTurns.length > 0) {
        selectedPlayer = checkHorizontal(gameBoard);
        if (!selectedPlayer) {
            selectedPlayer = checkVertical(gameBoard);
            if (!selectedPlayer) {
                selectedPlayer = checkDiagonally(gameBoard);
            }
        }
    }
    isActivePlayer = activePlayer === 'X';
    console.log(gameTurns.length, selectedPlayer);

    return (
        <main>
            <div id={"game-container"}>
                <ol id="players" className={'highlight-player'}>
                    <Player name="Player1" symbol={'X'} isActivePlayer={isActivePlayer} onNameUpdated={onPlayerNameUpdated}/>
                    <Player name="Player2" symbol={'O'} isActivePlayer={!isActivePlayer} onNameUpdated={onPlayerNameUpdated}/>
                </ol>
                {
                    // (gameTurns.length === 9 || selectedPlayer) && <p className={'won-status'}> Player {selectedPlayer} Won</p>
                    (gameTurns.length === 9 || selectedPlayer) &&
                    <GameOver winner={ players[selectedPlayer]} onRematch={doReMatch}/>
                }
                <GameBoard activePlayer={activePlayer} setNextActivePlayer={setNextActivePlayer} gameTurns={gameTurns}
                           board={gameBoard}/>
            </div>
            <Log turns={gameTurns}/>
        </main>
    )
}

export default App;