import React from 'react';

export default function TilePalette({
	tileset,
	position,
	size,
	activeTile,
	setActiveTile,
}) {
	const { width, height } = size;
	const tiles = [];
	let id = 0;

	for (let y = 0; y < height; y = y + 32) {
		const row = [];
		for (let x = 0; x < width; x = x + 32) {
			row.push({
				x,
				y,
				id: id++,
			});
		}
		tiles.push(row);
	}

	return (
		<div
			style={{
				position: 'absolute',
				zIndex: 100,
				backgroundColor: 'white',
				border: '1px solid black',
				top: position.y,
				left: position.x,
			}}
		>
			<div
				id="palette"
				style={{
					background: `url(${tileset})`,
					backgroundRepeat: 'no-repeat',
					backgroundPosition: `-${activeTile.x}px -${activeTile.y}px`,
					width: '32px',
					height: '32px',
				}}
			/>
			{tiles.map((row, y) => (
				<div key={y} style={{ display: 'flex' }}>
					{row.map((tile, x) => (
						<div
							onClick={() => setActiveTile({ x: x * 32, y: y * 32 })}
							key={x}
							style={{
								borderTop: '1px solid black',
								borderRight: '1px solid black',
								background: `url(${tileset})`,
								backgroundRepeat: 'no-repeat',
								backgroundPosition: `-${x * 32}px -${y * 32}px`,
								width: '32px',
								height: '32px',
								cursor: 'pointer',
							}}
						/>
					))}
				</div>
			))}
		</div>
	);
}
