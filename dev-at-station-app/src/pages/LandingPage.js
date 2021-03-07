import React from 'react';
import RegisterForm from '../components/formComp/RegisterForm';
import LoginForm from '../components/formComp/LoginForm';
import DevMode from '../components/miscComp/DevMode';

export default function LandingPage({ token, setToken }) {
	return (
		<div>
			<div className="h-full d-flex flex-column align-items-center">
				<h1 className="start-header text-4xl mt-5">Retro-Game-Maker</h1>
				<div className="flex justify-around p-5 w-full">
					<div className="flex flex-col align-items-center w-64  border-black border-2 rounded bg-blue-400">
						<h2 className="text-gray-800 text-3xl text-center mb-2">
							Register
						</h2>
						<RegisterForm token={token} />
					</div>
					<div className="flex flex-col align-items-center w-64 border-black border-2 rounded bg-blue-400">
						<h2 className="text-gray-800 text-3xl text-center mb-2">Login</h2>
						<LoginForm setToken={setToken} token={token} />
					</div>
				</div>
				<DevMode />
			</div>
		</div>
	);
}
