const Player = (props) => {
    return (
        <div>
            {}
            {props.playerData === null 
            ? <button onClick={() => props.joinGame(props.index, props.index)}>Join Game</button> 
            : <button onClick={() => props.leaveGame(props.index)}>Leave Game</button>}
        </div>
    )
}

export default Player