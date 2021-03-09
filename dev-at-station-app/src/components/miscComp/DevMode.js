import React from 'react';

export default function DevMode() {
	return (
		<div className="d-flex w-full justify-evenly">
			<div className="border-box">
				<a
					href="/game"
					className="btn text-2xl btn-danger rounded-full shadow-2xl border-white border-1 "
				>
					<div
						className="m-24  p-3"
						style={{
							background: `url('../images/characters/char4.png')`,
							width: 128,
							height: 128,
							backgroundSize: '384px 512px',
							imageRendering: 'crisp-edges',
						}}
					/>
					Try (Game)
				</a>
			</div>
			<div className="border-box">
				<a
					href="/createmap"
					className="btn text-2xl btn-success rounded-full shadow-2xl border-white border-1 "
				>
					<div
						className="m-24  p-3 "
						style={{
							background: `url('../images/characters/char3.png')`,
							width: 128,
							height: 128,
							backgroundSize: '384px 512px',
							imageRendering: 'crisp-edges',
						}}
					/>
					Try (Map)
				</a>
			</div>
			<div className="border-box">
				<a
					href="/about"
					className="btn text-2xl btn-primary rounded-full shadow-2xl border-white border-1 "
				>
					<div
						className="bg-red-400 m-24  p-3"
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
