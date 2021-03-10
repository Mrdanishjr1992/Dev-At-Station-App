import React, { useState } from 'react';

export default function PlayerForm({
	token,
	user,
	setPlayers,
	setUserId,
	players,
}) {
	const [name, setName] = useState('');
	const [gender, setGender] = useState('');
	const [bio, setBio] = useState('');

	async function registerSubmit(e) {
		e.preventDefault();
		const playerObj = {
			name,
			gender,
			bio,
			token,
			userId: user._id,
		};
		await fetch('https://retro-game-maker.herokuapp.com/player', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(playerObj),
		})
			.then((res) => {
				res.json();
			})
			.then((jsonData) => {
				setName('');
				setGender('');
				setBio('');
				fetch(`https://retro-game-maker.herokuapp.com/player/${user._id}`)
					.then((res) => {
						return res.json();
					})
					.then((data) => {
						setPlayers(data);
						setUserId('form refresh');
					})
					.catch((err) => err);
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
					required
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
					required
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
					required
				/>
			</div>
			<div className="my-1 mx-auto">
				{players.length < 3 ? (
					<button className="btn btn-outline-primary" type="submit">
						Register
					</button>
				) : (
					<h3 className="text-blue-300 font-bold ">Max Files Reached</h3>
				)}
			</div>
		</form>
	);
}
