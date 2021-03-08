import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PlayerForm from '../components/formComp/PlayerForm';
import PlayerList from '../components/playerComp/PlayerList';

export default function LoadingPage({ token }) {
	const history = useHistory();
	const [user, setUser] = useState({});
	const [players, setPlayers] = useState([]);
	const [userId, setUserId] = useState('');

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
	}, [userId, history]);

	return (
		<div className="flex flex-col align-items-center w-full h-full">
			<div className="flex w-full justify-between">
				<div className="m-3">
					<a href="/loading" className="btn btn-primary">
						Loading-Page
					</a>
				</div>
				<div className="m-3">
					<a href="/" className="btn btn-primary">
						Esc
					</a>
				</div>
			</div>
			<h1 className="text-red-700 text-6xl text-center mt-4">
				Retro-Game-Maker
			</h1>
			<div className="flex flex-col border-black border-2 bg-white p-2 m-3">
				<h2 className="text-red-900 text-2xl text-center">Load Game</h2>
				<div className="flex flex-col border-black border-2 bg-white p-2 m-3">
					<div className="border-3 border-black p-2 bg-yellow-500">
						<PlayerForm
							token={token}
							user={user}
							players={players}
							setPlayers={setPlayers}
							setUserId={setUserId}
						/>
					</div>
					<PlayerList
						players={players}
						setPlayers={setPlayers}
						token={token}
						user={user}
						setUserId={setUserId}
					/>
				</div>
			</div>
		</div>
	);
}
