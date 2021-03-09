import React from 'react';

export default function AboutPage() {
	const token = localStorage.getItem('token');
	return (
		<div className="p-5 text-gray-300 ">
			<div className="flex w-full justify-between align-items-center  p-2 mb-4">
				<div className="m-3">
					<a
						href="/"
						className="btn bg-yellow-400 font-bold  text-red-800 rounded-xl shadow-lg"
					>
						Contact
					</a>
				</div>
				<h1 className="flex-grow logo text-red-500 font-bold text-6xl text-center mt-4">
					Retro-Game-Maker
				</h1>
				{token ? (
					<div className="m-3">
						<a
							href="/loading"
							className="btn bg-red-800 font-bold  text-yellow-400 rounded-xl shadow-lg"
						>
							Back
						</a>
					</div>
				) : (
					<div className="m-3">
						<a
							href="/"
							className="btn bg-red-800 font-bold  text-yellow-400 rounded-xl shadow-lg"
						>
							back
						</a>
					</div>
				)}
			</div>
			<div className="h-full d-flex flex-column align-items-center align-content-center ">
				<p className="p-2 text-2xl text-center">
					Hello, People of the Interweb. I'm Mohamed A. Danish, a software
					developer who is passionate in all things Science/Tech. I had a lot of
					fun making this application the takes the user back to the old'n days
					where Retro was the "Buzz" or "Fizz" , as they called it. Hopefully I
					can keep working on this lovely Project and make more features.
				</p>
				<p className="p-2 text-2xl text-center">Thank you.</p>

				<div className="flex">
					<div
						className="m-24"
						style={{
							background: `url('../images/characters/char1.png')`,
							width: 128,
							height: 128,
							backgroundSize: '384px 512px',
							imageRendering: 'crisp-edges',
						}}
					/>
					<div
						className="m-24"
						style={{
							background: `url('../images/characters/char3.png')`,
							width: 128,
							height: 128,
							backgroundSize: '384px 512px',
							imageRendering: 'crisp-edges',
						}}
					/>
					<div
						className="m-24"
						style={{
							background: `url('../images/characters/char4.png')`,
							width: 128,
							height: 128,
							backgroundSize: '384px 512px',
							imageRendering: 'crisp-edges',
						}}
					/>
				</div>
			</div>
		</div>
	);
}
