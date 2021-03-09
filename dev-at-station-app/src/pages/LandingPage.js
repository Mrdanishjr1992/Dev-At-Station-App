import React, { useState } from 'react';
import RegisterForm from '../components/formComp/RegisterForm';
import LoginForm from '../components/formComp/LoginForm';
import DevMode from '../components/miscComp/DevMode';

export default function LandingPage({ token, setToken }) {
	const [welcome, setWelcome] = useState(false);

	const setBannerClass = () => {
		const classArr = ['banner-side cfb'];
		if (welcome) classArr.push('send-right');
		return classArr.join(' ');
	};

	const setFormClass = () => {
		const classArr = ['form-side cfb'];
		if (welcome) classArr.push('send-left');
		return classArr.join(' ');
	};

	return (
		<div className="flex flex-col">
			<div className="mb-12">
				<h1 className="text-red-500 font-bold text-6xl text-center mt-4">
					Retro-Game-Maker
				</h1>
			</div>
			<div id="landing-form h-full">
				<div className="Container cfb  h-full">
					<div className={setBannerClass()}>
						{welcome ? (
							<h2 className="text-2xl">Hello, New Friend!</h2>
						) : (
							<h2 className="text-2xl">Welcome Back</h2>
						)}

						<button
							className="btn btn-outline-primary mt-5"
							onClick={() => setWelcome(!welcome)}
						>
							{welcome ? 'Sign In' : 'Create Account'}
						</button>
					</div>
					<div className={setFormClass()}>
						{welcome ? (
							<div>
								<RegisterForm />
							</div>
						) : (
							<div>
								<LoginForm />
							</div>
						)}
					</div>
				</div>
			</div>
			<div className="absolute bottom-48 w-full">
				<DevMode />
			</div>
		</div>
	);
}
