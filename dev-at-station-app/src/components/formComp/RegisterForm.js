import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

export default function RegisterForm() {
	// const history = useHistory();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [confirm, setConfirm] = useState('');
	const [error, setError] = useState(null);

	const registerSubmit = (e) => {
		e.preventDefault();

		if (!username || !password) {
			return setError('All fields are required');
		}

		const userObj = { username, password, confirm };

		fetch('http://localhost:4000/user', {
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
			.then((jsonData) => {
				setUsername('');
				setPassword('');
				setConfirm('');
			})
			.catch((error) => {
				return setError(error.message);
			});
	};
	// useEffect(() => {
	// 	const token = {
	// 		token: localStorage.getItem('token'),
	// 	};
	// 	if (token) history.push('/loading');
	// });
	return (
		<form className="flex flex-col" onSubmit={registerSubmit}>
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
