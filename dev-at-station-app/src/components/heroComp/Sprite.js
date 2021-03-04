import React from 'react';

export default function Sprite({ image, data }) {
	const { y, x, h, w } = data;
	return (
		<>
			<div
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
