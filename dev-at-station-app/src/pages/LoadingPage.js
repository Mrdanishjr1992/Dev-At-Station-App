import React, { useState, useEffect } from 'react';
import RegisterForm from '../components/formComp/RegisterForm';
import LoginForm from '../components/formComp/LoginForm';

export default function LoadingPage() {
	var [user, setUser] = useState({});
	var [players, setPlayers] = useState([]);
	const [token, setToken] = useState(null);

	useEffect(() => {
		// const token = {
		// 	token: localStorage.getItem('token'),
		// };
		// console.log('Token = ', typeof token, token);
		fetch(`http://localhost:4000/player/${user._id}`)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setPlayers(data);
				console.log('data', data);
			})
			.catch((err) => err);
	}, [user]);

	return (
		<div className="flex flex-col align-items-center">
			<h1 className="text-red-700 text-6xl text-center">Retro-Game-Maker</h1>
			<div className="flex justify-evenly w-full">
				<div className="flex flex-col border-black border-2 p-5 m-3">
					<h2 className="text-red-900 text-2xl text-center">Load Game</h2>
					<div>
						{user &&
							players.map((player) => (
								<div
									key={player._id}
									className="border-3 border-black p-2 bg-yellow-500"
								>
									<a href={`/game/${player._id}`}>
										<p className="text-green-600">Level: {player.level}</p>
										<p className="text-red-600">{player.name}</p>
										<p>{player.bio}</p>
									</a>
								</div>
							))}
					</div>
				</div>
				<div className="flex flex-col border-black border-2 p-5 m-3">
					<div>
						<h2 className="text-red-900 text-2xl text-center">Register</h2>
						<RegisterForm />
					</div>

					<hr />
					<hr />

					<div>
						<h2 className="text-red-900 text-2xl text-center">Login</h2>
						<LoginForm setUser={setUser} setToken={setToken} token={token} />
					</div>
				</div>
			</div>
		</div>
	);
}
