import React from 'react';

export default function DevMode() {
	return (
		<div className="d-flex w-full justify-evenly">
			<div>
				<a href="/game" className="btn btn-danger">
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
					Dev-Mode( Game )
				</a>
			</div>
			<div>
				<a href="/createmap" className="btn btn-success">
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
					Dev-Mode( Map creator )
				</a>
			</div>
			<div>
				<a href="/about" className="btn btn-primary">
					<div
						className="bg-red-400 m-24"
						style={{
							background: `url('../images/characters/char1.png')`,
							width: 128,
							height: 128,
							backgroundSize: '384px 512px',
							imageRendering: 'crisp-edges',
						}}
					/>
					About
				</a>
			</div>
		</div>
	);
}
