import { useState } from 'react';
import { useParams } from 'react-router-dom'
import Player from './poker/Player'

function Game() {
    const params = useParams()
    const [players, setPlayers] = useState(Array(6).fill(null))

    const joinGame = (index, id) => {
      const currentPlayers = players.slice()

      currentPlayers[index] = id

      setPlayers(currentPlayers)
    }

    const leaveGame = (index) => {
      const currentPlayers = players.slice()

      currentPlayers[index] = null

      setPlayers(currentPlayers)
    }

    return (
      <div id="poker-table" className="h-screen w-screen bg-[url('/public/assets/poker-table.jpg')] bg-no-repeat bg-center bg-cover text-white">
        {players.map((player, index) => <Player playerData={player} joinGame={joinGame} leaveGame={leaveGame} index={index} key={index} />)}
      </div>
    );
  }

export default Game