import React from 'react';

export default function Sprite({ image, data, position }) {
	const { y, x, h, w } = data;
	return (
		<>
			<div
				className="map"
				style={{
					top: -position.y,
					left: -position.x,
				}}
			></div>
			<canvas
				id="hero"
				style={{
					height: `${h}px`,
					width: `${w}px`,
					backgroundImage: `url(${image})`,
					backgroundPosition: `-${x}px -${y}px`,
				}}
			/>
		</>
	);
}
