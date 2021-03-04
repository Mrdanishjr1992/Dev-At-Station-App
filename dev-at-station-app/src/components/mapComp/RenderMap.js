import React from 'react';

export default function RenderMap({ bgTile, mapTile, mapTypes }) {
	const bgtile = bgTile;
	const mapTiles = mapTile;
	const mapType = mapTypes;

	return (
		<div
			style={{
				position: 'relative',
				boxSizing: 'border-box',
				backgroundColor: 'transparent',
			}}
		>
			<div
				style={{
					position: 'absolute',
					zIndex: 2,
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
									backgroundPosition: `-${tile.x}px -${tile.y}px`,
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
		</div>
	);
}
