import React, {useState} from 'react';

function Player({name, symbol, isActivePlayer, onNameUpdated}) {
    const [playerName, setPlayerName] = useState(name),
        [isEditing, setIsEditing] = useState(false),
        onNameChange = (eve) => {
            let target = eve.currentTarget;
            setPlayerName(target.value);
        },
        /**
         * If state depends on previous state you should not do setPreviousState(!previousState)
         * this is because it will not guaranty that correct value
         * instead it is strong recommended to use calBack functions
         * setPreviousState((prevState)=>{return !prevState});
         * */
        updateEditStateBasedOnPrevState = () => {
            setIsEditing(wasEditing => !wasEditing);
            if(isEditing) {
                onNameUpdated(symbol, playerName);
            }
        }/*,
        onEdit = () => {
            setIsEditing(true);
        },
        onSave = () => {
            setIsEditing(false);
        }*/;
    let playerInfo = <span className="player-name">{playerName}</span>;//,
    // button = <button onClick={onEdit}>Edit </button>;
    if (isEditing) {
        playerInfo = <input className="player-name" type={"text"} value={playerName} onChange={onNameChange}/>;
        // button = <button onClick={onSave}>Save </button>;
    }


    return (
        <li className={isActivePlayer ? "active":undefined }>
            {/*<span className="player-info">
                {isEditing ? <input className="player-name" type={"text"} value={playerName} onChange={onNameChange}/> :
                    <span className="player-name">{playerName}</span>}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={onEditOrSave}> {isEditing ? 'Save' : 'Edit'} </button>*/}
            <span className="player">
                {playerInfo}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={updateEditStateBasedOnPrevState}> {isEditing ? 'Save' : 'Edit'} </button>
        </li>
    );
}

export default Player;