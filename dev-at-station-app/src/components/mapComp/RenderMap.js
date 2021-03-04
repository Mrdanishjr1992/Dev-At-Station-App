import React from 'react';

export default function RenderMap({ bgTiles, mapTiles, size, mapType }) {
	return (
		<div
			style={{
				position: 'relative',
				boxSizing: 'border-box',
				backgroundColor: 'transparent',
				width: size.width,
				height: size.height,
			}}
		>
			<div
				style={{
					position: 'absolute',
					zIndex: 2,
					boxSizing: 'border-box',
					backgroundColor: 'transparent',
					width: size.width,
					height: size.height,
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
					width: size.width,
					height: size.height,
				}}
			>
				{bgTiles.map((row, y) => (
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
		</div>
	);
}
