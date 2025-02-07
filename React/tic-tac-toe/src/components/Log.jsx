function Log({turns}) {
    return (
        <>
            <h2> Logs </h2>
            <ol id={'log'}>
                {
                    turns.map((turn) => {
                        return <li key={turn.rowIndex + '_' + turn.colIndex}> {turn.activePlayer} Selected
                            Row {turn.rowIndex + 1}, Column {turn.colIndex + 1} </li>;
                    })
                }
            </ol>
        </>
    );
}

export default Log;