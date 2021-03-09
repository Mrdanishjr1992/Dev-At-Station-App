import React from 'react';

export default function PlayerCard({
	player,
	token,
	setPlayers,
	user,
	setUserId,
}) {
	async function handleDelete(playerId) {
		await fetch(`http://localhost:4000/player/${playerId}/delete`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(token),
		})
			.then((res) => {
				res.json();
			})
			.then((data) => setUserId('delete refresh'))
			.catch((err) => err);
	}
	return (
		<div className="border-3 border-black p-2 bg-red-200 flex justify-between w-full flex-row">
			<a href={`/game/${player._id}`}>
				<div>
					<p>Name: {player.name}</p>
					<p>Gender:{player.gender}</p>
					<p>Bio: {player.bio}</p>
				</div>
			</a>
			<div className="pt-5">
				<button
					onClick={() => handleDelete(player._id)}
					className="btn bg-red-800 font-bold  text-green-600 rounded-xl shadow-lg"
				>
					delete
				</button>
			</div>
		</div>
	);
}
