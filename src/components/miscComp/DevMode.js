import React from 'react';

export default function DevMode() {
	return (
		<div className="d-flex w-full justify-evenly text-2xl text-center text-white">
			<div className="border-box">
				<a
					href="/game"
					className="btn  btn-danger rounded-full border-white border-1 "
				>
					<div
						className="bg-transparent"
						style={{
							background: `url('../images/characters/char4.png')`,
							width: 128,
							height: 128,
							backgroundSize: '384px 512px',
							imageRendering: 'crisp-edges',
						}}
					/>
				</a>
				<p>
					Demo ( <span className="text-red-500">Game</span> )
				</p>
			</div>
			<div className="border-box">
				<a
					href="/createmap"
					className="btn text-2xl btn-success rounded-full border-white border-1 "
				>
					<div
						className="m-auto bg-transparent"
						style={{
							background: `url('../images/characters/char3.png')`,
							width: 128,
							height: 128,
							backgroundSize: '384px 512px',
							imageRendering: 'crisp-edges',
						}}
					/>
				</a>
				<p>
					Demo ( <span className="text-green-500">Create Map</span> )
				</p>
			</div>
			<div className="border-box">
				<a
					href="/about"
					className="btn text-2xl btn-primary rounded-full border-white border-1 "
				>
					<div
						className="m-auto bg-transparent"
						style={{
							background: `url('../images/characters/char1.png')`,
							width: 128,
							height: 128,
							backgroundSize: '384px 512px',
							imageRendering: 'crisp-edges',
						}}
					/>
				</a>
				<p>
					(<span className="text-blue-500"> About </span>)
				</p>
			</div>
		</div>
	);
}
