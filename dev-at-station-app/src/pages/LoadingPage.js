import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PlayerForm from '../components/formComp/PlayerForm';
import PlayerEditForm from '../components/formComp/PlayerEditForm';
import PlayerList from '../components/playerComp/PlayerList';
import Instructions from '../components/miscComp/Instructions';

export default function LoadingPage({ token }) {
	const history = useHistory();
	const [user, setUser] = useState({});
	const [players, setPlayers] = useState([]);
	const [userId, setUserId] = useState('');
	const [editPlayer, setEditPlayer] = useState(null);
	useEffect(() => {
		const tokenObj = {
			token: localStorage.getItem('token'),
		};
		if (tokenObj.token) {
			fetch('http://localhost:4000/user/profile', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(tokenObj),
			})
				.then((response) => {
					if (response.status === 200) {
						return response.json();
					}
				})
				.then((data) => {
					console.log('user', data);
					setUser(data.profile);
					fetch(`http://localhost:4000/player/${data.profile._id}`)
						.then((res) => {
							return res.json();
						})
						.then((data) => {
							console.log('players', data);
							return setPlayers(data);
						})
						.catch((err) => err);
				})
				.catch((err) => console.log(err));
		} else {
			history.push('/');
		}
	}, [userId, history, editPlayer]);
	function logout() {
		localStorage.removeItem('token');
	}
	return (
		<div className="flex flex-col align-items-center w-full h-full">
			<div className="flex w-full justify-between align-items-center  p-2 mb-4">
				<div className="m-3">
					<a
						href="/profile"
						className="btn bg-green-800 text-yellow-300 border-black border-1 font-bold rounded-xl shadow-lg"
					>
						Profile
					</a>
				</div>
				<h1 className="text-red-500 font-bold text-6xl text-center mt-4">
					Retro-Game-Maker
				</h1>
				<div className="m-3">
					<a
						href="/"
						onClick={() => logout()}
						className="btn bg-red-800 font-bold border-black border-1 text-yellow-400 rounded-xl shadow-lg"
					>
						Logout
					</a>
				</div>
			</div>
			{user && (
				<h1 className="text-3xl text-blue-300">
					Welcome, back! {user.username}.
				</h1>
			)}
			<div className="flex flex-col border-black border-2 rounded-lg bg-white p-2 m-12 w-3/4">
				<div className="flex border-black border-2 bg-black p-2 m-3">
					<div className="border-3 flex-1 border-black p-2 landing-form">
						<h2 className="text-blue-200 text-2xl text-center">
							Create Game File
						</h2>
						<PlayerForm
							token={token}
							user={user}
							players={players}
							setPlayers={setPlayers}
							setUserId={setUserId}
						/>
					</div>
					<div className="border-3 flex-1 border-black p-2 landing-form">
						<div
							style={{
								margin: 'auto',
								background: `url('../images/characters/char1.png')`,
								width: 128,
								height: 128,
								backgroundSize: '384px 512px',
								imageRendering: 'crisp-edges',
							}}
						/>
						<div
							style={{
								margin: 'auto',
								background: `url('../images/characters/char3.png')`,
								width: 128,
								height: 128,
								backgroundSize: '384px 512px',
								imageRendering: 'crisp-edges',
							}}
						/>
						<div
							style={{
								margin: 'auto',
								background: `url('../images/characters/char4.png')`,
								width: 128,
								height: 128,
								backgroundSize: '384px 512px',
								imageRendering: 'crisp-edges',
							}}
						/>
					</div>
					<div className="border-3 border-black p-2 landing-form flex flex-col justify-between">
						<h2 className="text-blue-200 text-2xl text-center">
							{editPlayer ? 'Edit Game File' : 'Load Game File'}
						</h2>
						{editPlayer ? (
							<PlayerEditForm
								editPlayer={editPlayer}
								setEditPlayer={setEditPlayer}
								user={user}
							/>
						) : (
							<PlayerList
								players={players}
								setPlayers={setPlayers}
								token={token}
								user={user}
								setUserId={setUserId}
								setEditPlayer={setEditPlayer}
							/>
						)}
					</div>
				</div>
			</div>
			<Instructions />
		</div>
	);
}
