import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function LoginForm({ setToken }) {
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

		fetch('http://localhost:4000/user/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(userObj),
		})
			.then((res) => {
				if (res.status === 200) {
					return res.json();
				}
				setError(res.statusText);
			})
			.then((data) => {
				setUsername('');
				setPassword('');
				// Update authState in App.js
				setToken(data.token);
				// Store Token in localStorage
				localStorage.setItem('token', data.token);
				history.push('/loading');
			})
			.catch((err) => {
				return setError(err.message);
			});
	};
	return (
		<form className="flex flex-col" onSubmit={loginSubmit}>
			{error && <h2 className="text-red-700">{error}</h2>}
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
					id="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
			</div>
			<div className="my-1 mx-auto">
				<button className="btn btn-primary" type="submit">
					Login
				</button>
			</div>
		</form>
	);
}
