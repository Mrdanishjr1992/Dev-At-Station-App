import React from 'react';
import Sprite from './Sprite';

export default function Actor({
	sprite,
	data,
	step = 0,
	dir = 0,
	position = { x: 150, y: 150 },
}) {
	const { h, w } = data;
	return (
		<Sprite
			position={position}
			image={sprite}
			data={{
				x: step * w,
				y: dir * h,
				h,
				w,
			}}
		/>
	);
}
