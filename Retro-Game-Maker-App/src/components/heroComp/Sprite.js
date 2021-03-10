import React from 'react';

export default function Sprite({ image, data, position }) {
	const { y, x, h, w } = data;
	return (
		<>
			<div
				id="hero"
				style={{
					position: 'relative',
					top: `${position.y}px`,
					left: `${position.x}px`,
					height: `${h}px`,
					width: `${w}px`,
					backgroundImage: `url(${image})`,
					backgroundPosition: `-${x}px -${y}px`,
				}}
			/>
		</>
	);
}
