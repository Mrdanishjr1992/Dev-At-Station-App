import React from 'react';

export default function LandingPage() {
	return (
		<div className="h-full d-flex flex-column align-items-center align-content-center ">
			<h1 className="start-header text-4xl m-10">Retro-Game-Maker</h1>
			<div>
				<a href="/loading" className="btn btn-danger">
					Start
				</a>
			</div>
			<div
				className="m-24"
				style={{
					background: `url('../images/characters/char4.png')`,
					width: 128,
					height: 128,
					backgroundSize: '384px 512px',
					imageRendering: 'crisp-edges',
				}}
			></div>
			<div>
				<a href="/about" className="btn btn-danger">
					About
				</a>
			</div>
		</div>
	);
}
