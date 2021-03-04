import React from 'react';

export default function RenderMap({ bgTile, mapTile, mapTypes }) {
	const bgtile = bgTile;
	const mapTiles = mapTile;
	const mapType = mapTypes;

	return (
		<>
			<div
				style={{
					position: 'absolute',
					zIndex: 1,
					backgroundColor: 'transparent',
					width: 800,
					height: 600,
				}}
			>
				{mapTiles.map((row, y) => (
					<div key={y} style={{ display: 'flex' }}>
						{row.map((tile, x) => (
							<div
								key={x}
								style={{
									background: `url(${mapType})`,
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
					zIndex: 0,
					boxSizing: 'border-box',
					backgroundColor: 'transparent',
					width: 800,
					height: 600,
				}}
			>
				{mapTiles.map((row, y) => (
					<div key={y} style={{ display: 'flex' }}>
						{row.map((tile, x) => (
							<div
								key={x}
								style={{
									background: `url(${mapType})`,
									backgroundRepeat: 'no-repeat',
									backgroundPosition: `-${bgtile.x}px -${bgtile.y}px`,
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
