import React from 'react';

export default function RenderMap({ mapObj }) {
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
				{mapObj.tiles.map((row, y) => (
					<div key={y} style={{ display: 'flex' }}>
						{row.map((tile, x) => (
							<div
								key={x}
								style={{
									background: `url(${mapObj.mapType})`,
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
				{mapObj.tiles.map((row, y) => (
					<div key={y} style={{ display: 'flex' }}>
						{row.map((tile, x) => (
							<div
								key={x}
								style={{
									background: `url(${mapObj.mapType})`,
									backgroundRepeat: 'no-repeat',
									backgroundPosition: `-${mapObj.bgTile.x}px -${mapObj.bgTile.y}px`,
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
