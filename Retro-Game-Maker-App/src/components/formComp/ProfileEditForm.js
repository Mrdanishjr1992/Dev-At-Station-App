import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function PlayerEditForm({ user, editUser, setEditUser }) {
	const [username, setUsername] = useState(user.userame);
	const userCopy = editUser;
	const history = useHistory();
	async function registerSubmit(e) {
		e.preventDefault();
		const token = localStorage.getItem('token');
		const userObj = {
			...userCopy,
			username: username || user.username,
			token,
		};
		await fetch(`http://localhost:4000/user/${user._id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(userObj),
		})
			.then((res) => {
				res.json();
			})
			.then((jsonData) => {
				setUsername('');
				setEditUser(null);
			})
			.catch((err) => {
				return err;
			});
	}
	async function deleteUser(e) {
		const token = { token: localStorage.getItem('token') };

		await fetch(`http://localhost:4000/user/delete`, {
			method: 'delete',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(token),
		})
			.then((res) => {
				res.json();
			})
			.then((jsonData) => {
				setEditUser(null);
				setUsername('');
				history.push('/');
				localStorage.removeItem('token');
			})
			.catch((err) => {
				return err;
			});
	}
	return (
		<div className="border-3 flex-1 border-black p-2 landing-form">
			<h2 className="text-blue-200 text-2xl text-center">Change Username</h2>
			<form className="flex flex-col m-3" onSubmit={registerSubmit}>
				<div className="flex flex-col border-black border-2 m-3 bg-gray-800  p-2">
					<label className="text-blue-300" htmlFor="name">
						Username
					</label>
					<input
						className="border-pink-700 border-2"
						type="text"
						name="name"
						id="name"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div className="my-1 mx-auto">
					<button
						className="btn bg-yellow-400 text-green-900 font-bold rounded-xl border-black border-1 mx-1"
						onClick={() => setEditUser(null)}
					>
						Back
					</button>
					<button
						className="btn bg-green-800 text-yellow-400 rounded-xl border-black border-1 mx-1"
						type="submit"
					>
						EDIT
					</button>
					<button
						className="btn bg-red-800 font-bold text-yellow-400 rounded-xl border-black border-1 mx-1"
						onClick={() => deleteUser()}
					>
						delete
					</button>
				</div>
			</form>
		</div>
	);
}
