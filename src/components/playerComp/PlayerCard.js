import React from 'react';

export default function PlayerCard({
  player,
  token,
  setPlayers,
  user,
  setUserId,
  setEditPlayer,
}) {
  async function handleDelete(playerId) {
    await fetch(
      `https://retro-game-maker.herokuapp.com/player/${playerId}/delete`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(token),
      },
    )
      .then((res) => {
        res.json();
      })
      .then((data) => setUserId('delete refresh'))
      .catch((err) => err);
  }
  return (
    <div className='border-3 border-black my-2 p-2 bg-red-200 flex justify-between w-full flex-row'>
      <a href={`/game/${player._id}`}>
        <div>
          <p>Name: {player.name}</p>
          <p>Gender:{player.gender}</p>
          <p>Bio: {player.bio}</p>
        </div>
      </a>
      <div className='flex flex-col'>
        <button
          onClick={() => setEditPlayer(player)}
          className='btn p-2 m-1 border-black border-1 bg-yellow-400 font-bold  text-red-600 rounded-xl shadow-lg'>
          edit
        </button>
        <button
          onClick={() => handleDelete(player._id)}
          className='btn p-2 m-1 border-black border-1 bg-red-800 font-bold  text-yellow-400 rounded-xl shadow-lg'>
          delete
        </button>
      </div>
    </div>
  );
}
