import React from 'react';
import PlayerCard from './PlayerCard';

export default function PlayerList({
	players,
	setPlayers,
	token,
	user,
	setUserId,
	setEditPlayer,
}) {
	return players.map((player) => (
		<PlayerCard
			key={player._id}
			player={player}
			setPlayers={setPlayers}
			token={token}
			user={user}
			setUserId={setUserId}
			setEditPlayer={setEditPlayer}
		/>
	));
}
