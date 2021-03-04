import React from 'react';

export default function Map({
	tiles,
	setTiles,
	activeTile,
	bgTile,
	tileset,
	size,
	setSaveMap,
}) {
	function cloneMatrix(m) {
		const clone = new Array(m.length);
		for (let i = 0; i < m.length; ++i) {
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
		setSaveMap(() => {
			const mapObj = {
				tiles: tiles,
				bgTile: bgTile,
				mapType: tileset,
				size: size,
			};
			return mapObj;
		});
	}

	return (
		<>
			<div
				style={{
					position: 'absolute',
					zIndex: 2,
					boxSizing: 'border-box',
					backgroundColor: 'transparent',
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
									borderTop: '.1px solid black',
									borderRight: '.1px solid black',
									background: `url(${tileset})`,
									backgroundRepeat: 'no-repeat',
									backgroundPosition: `-${tile.v.x}px -${tile.v.y}px`,
									width: '32px',
									height: '32px',
									cursor: 'pointer',
								}}
							/>
						))}
					</div>
				))}
			</div>
			<div
				style={{
					position: 'absolute',
					zIndex: 1,
					boxSizing: 'border-box',
					backgroundColor: 'transparent',
					width: size.width,
				}}
			>
				{tiles.map((row, y) => (
					<div key={y} style={{ display: 'flex' }}>
						{row.map((tile, x) => (
							<div
								key={x}
								style={{
									background: `url(${tileset})`,
									backgroundRepeat: 'no-repeat',
									backgroundPosition: `-${bgTile.x}px -${bgTile.y}px`,
									width: '32px',
									height: '32px',
									cursor: 'pointer',
								}}
							/>
						))}
					</div>
				))}
			</div>
		</>
	);
}
