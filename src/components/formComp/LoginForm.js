import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function LoginForm() {
	const history = useHistory();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);

	const loginSubmit = (e) => {
		e.preventDefault();

		if (!username || !password) {
			return setError('All fields are required');
		}

		const userObj = { username, password };

		fetch('https://retro-game-maker.herokuapp.com/user/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(userObj),
		})
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setUsername('');
				setPassword('');
				if (data.error) {
					setError(data.error);
				} else {
					// Store Token in localStorage
					localStorage.setItem('token', data.token);
					// Update authState in App.js
					// setToken(data.token);
					history.push('/loading');
				}
			})
			.catch((err) => {
				return setError(err.message);
			});
	};
	return (
		<div className="landing-form">
			<h2 className="text-gray-200 text-3xl text-center mb-2">Login</h2>
			<form className="flex flex-col w-full mt-5" onSubmit={loginSubmit}>
				{error && (
					<h2 className="text-red-700 bg-gray-400 rounded-md text-center p-2 m-2">
						{error}
					</h2>
				)}
				<div className="flex flex-col bg-gray-400 text-black border-black border-2  p-2 m-2">
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
				<div className="flex flex-col bg-gray-400 text-black border-black border-2  p-2 m-2">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						id="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>
				<div className="my-1 mx-auto">
					<button
						className="btn hover:bg-blue-500  border-white text-white border"
						type="submit"
					>
						Login
					</button>
				</div>
			</form>
		</div>
	);
}
