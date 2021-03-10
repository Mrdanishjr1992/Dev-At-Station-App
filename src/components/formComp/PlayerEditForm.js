import React, { useState } from 'react';

export default function PlayerEditForm({ user, editPlayer, setEditPlayer }) {
	const [name, setName] = useState('');
	const [gender, setGender] = useState('');
	const [bio, setBio] = useState('');
	const player = editPlayer;

	async function registerSubmit(e) {
		e.preventDefault();
		const token = localStorage.getItem('token');
		const playerObj = {
			name: name || player.name,
			gender: gender || player.gender,
			bio: bio || player.bio,
			token,
			userId: user._id,
		};
		await fetch(
			`https://retro-game-maker.herokuapp.com/player/${editPlayer._id}`,
			{
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(playerObj),
			}
		)
			.then((res) => {
				res.json();
			})
			.then((jsonData) => {
				setName('');
				setGender('');
				setBio('');
				setEditPlayer(null);
			})
			.catch((err) => {
				return err;
			});
	}
	return (
		<form className="flex flex-col m-3" onSubmit={registerSubmit}>
			<div className="flex flex-col border-black border-2 m-3 bg-gray-800  p-2">
				<label className="text-blue-300" htmlFor="name">
					Name
				</label>
				<input
					className="border-pink-700 border-2"
					type="text"
					name="name"
					id="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</div>
			<div className="flex flex-col border-black border-2 m-3 bg-gray-800  p-2">
				<label className="text-blue-300" htmlFor="gender">
					Gender:
				</label>
				<input
					className="border-pink-700 border-2"
					type="text"
					name="gender"
					id="gender"
					value={gender}
					onChange={(e) => setGender(e.target.value)}
				/>
			</div>
			<div className="flex flex-col border-black border-2 m-3 bg-gray-800  p-2">
				<label className="text-blue-300" htmlFor="bio">
					Bio:
				</label>
				<input
					className="border-pink-700 border-2"
					type="text"
					name="bio"
					id="bio"
					value={bio}
					onChange={(e) => setBio(e.target.value)}
				/>
			</div>
			<div className="my-1 mx-auto">
				<button
					className="btn btn-outline-warning mx-1"
					onClick={() => setEditPlayer(null)}
				>
					Back
				</button>
				<button className="btn btn-outline-primary mx-1" type="submit">
					EDIT
				</button>
			</div>
		</form>
	);
}
