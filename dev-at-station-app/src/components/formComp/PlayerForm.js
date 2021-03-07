import React, { useState } from 'react';

export default function RegisterForm() {
	const [name, setName] = useState('');
	const [gender, setGender] = useState('');
	const [bio, setBio] = useState('');
	const registerSubmit = (e) => {
		e.preventDefault();
		const userObj = {
			name,
			gender,
			bio,
		};
		fetch('http://localhost:4000/user', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(userObj),
		})
			.then((res) => {
				return res.json();
			})
			.then((jsonData) => {
				console.log('Im here in register function', jsonData);
				setUsername('');
				setPassword('');
				setConfirm('');
			})
			.catch((err) => {
				return err;
			});
	};
	return (
		<form className="flex flex-col" onSubmit={registerSubmit}>
			<div className="flex flex-col border-black border-2">
				<label htmlFor="username">UserName</label>
				<input
					type="text"
					name="username"
					id="username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					required
				/>
			</div>
			<div className="flex flex-col border-black border-2">
				<label htmlFor="password">Password</label>
				<input
					type="password"
					name="password"
					id="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
			</div>
			<div className="flex flex-col border-black border-2">
				<label htmlFor="confirm">Confirm Password</label>
				<input
					type="password"
					name="confirm"
					id="confirm"
					value={confirm}
					onChange={(e) => setConfirm(e.target.value)}
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
}
