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
		await fetch('http://localhost:4000/player', {
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
				fetch(`http://localhost:4000/player/${user._id}`)
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
	if (players.length < 3) {
		return (
			<form className="flex flex-col" onSubmit={registerSubmit}>
				<h2>Create New Game</h2>
				<div className="flex flex-col border-black border-2">
					<label htmlFor="name">Name</label>
					<input
						type="text"
						name="name"
						id="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
					/>
				</div>
				<div className="flex flex-col border-black border-2">
					<label htmlFor="gender">Gender:</label>
					<input
						type="text"
						name="gender"
						id="gender"
						value={gender}
						onChange={(e) => setGender(e.target.value)}
						required
					/>
				</div>
				<div className="flex flex-col border-black border-2">
					<label htmlFor="bio">Bio:</label>
					<input
						type="text"
						name="bio"
						id="bio"
						value={bio}
						onChange={(e) => setBio(e.target.value)}
						required
					/>
				</div>
				<div className="my-1 mx-auto">
					<button className="btn btn-primary" type="submit">
						Register
					</button>
				</div>
			</form>
		);
	} else {
		return <p>Saved Games</p>;
	}
}
