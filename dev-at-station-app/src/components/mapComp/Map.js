import React from 'react';

export default function Map({ tiles, tileset, size, setTiles, activeTile }) {
	function cloneMatrix(m) {
		const clone = new Array(m.length);
		for (let i = 0; i < m.length; i++) {
			clone[i] = m[i].slice(0);
		}
		return clone;
	}
	function dropTile({ x, y }) {
		setTiles((prev) => {
			const clone = cloneMatrix(prev);
			const tile = {
				...clone[y][x],
				v: activeTile,
			};
			clone[y][x] = tile;
			return clone;
		});
		return;
	}
	return (
		<div
			style={{
				boxSizing: 'border-box',
				backgroundColor: 'white',
				width: size.width,
			}}
		>
			{tiles.map((row, y) => (
				<div key={y} style={{ display: 'flex' }}>
					{row.map((tile, x) => (
						<div
							onClick={() => dropTile({ x, y })}
							key={x}
							style={{
								borderTop: '1px solid black',
								borderRight: '1px solid black',
								background: `url(${tileset})`,
								backgroundRepeat: 'no-repeat',
								backgroundPosition: `-${activeTile.x}px -${activeTile.y}px`,
								width: '32px',
								height: '32px',
							}}
						/>
					))}
				</div>
			))}
		</div>
	);
}
