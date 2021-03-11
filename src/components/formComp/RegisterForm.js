import React, { useState } from 'react';

export default function RegisterForm({ setWelcome, welcome }) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [confirm, setConfirm] = useState('');
	const [error, setError] = useState(null);
	const [message, setMessage] = useState(null);

	const registerSubmit = (e) => {
		e.preventDefault();

		if (!username || !password || !confirm) {
			return setError('All fields are required');
		}
		if (password !== confirm) {
			return setError('Passwords didnt match!');
		}

		const userObj = { username, password, confirm };

		fetch('https://retro-game-maker.herokuapp.com/user', {
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
				setUsername('');
				setPassword('');
				if (jsonData.error) {
					setMessage('');
					setError(jsonData.error);
				} else {
					setError('');
					setMessage('Account Created!');
					setWelcome(!welcome);
				}
			})
			.catch((error) => {
				return setError(error.message);
			});
	};

	return (
		<div className="landing-form">
			<h2 className="text-gray-200 text-3xl text-center mb-2">Register</h2>
			<form className="flex flex-col w-full" onSubmit={registerSubmit}>
				{error && (
					<h2 className="text-red-700 bg-gray-400 rounded-md text-center p-2 m-2">
						{error}
					</h2>
				)}
				{message && <h2 className="text-green-700">{message}</h2>}
				<div className="flex flex-col bg-gray-400 text-black border-black border-2 p-2 m-2">
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
				<div className="flex flex-col bg-gray-400 text-black border-black border-2 p-2 m-2">
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
				<div className="flex flex-col bg-gray-400 text-black border-black border-2 p-2 m-2">
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
					<button
						className="btn hover:bg-blue-600  border-white text-white border"
						type="submit"
					>
						Register
					</button>
				</div>
			</form>
		</div>
	);
}
