import React, { useEffect, useState } from 'react';
import useDrag from '../hooks/useDraggable';
import TilePalette from '../components/mapComp/TilePalette';
import Map from '../components/mapComp/Map';

export default function MenuPage() {
	const season = ['spring', 'fall', 'winter'];
	const size = { width: 640, height: 288 };
	const { position } = useDrag('palette');
	const [tileset, setTileset] = useState('../images/maps/spring.png');
	const [activeTile, setActiveTile] = useState({ x: 1 * 32, y: 4 * 32 });
	const [mapSize, setMapSize] = useState({
		width: 800,
		height: 600,
	});
	const [tiles, setTiles] = useState([]);

	useEffect(() => {
		const _tiles = [];
		let id = 0;

		for (let y = 0; y < mapSize.height; y = y + 32) {
			const row = [];
			for (let x = 0; x < mapSize.width; x = x + 32) {
				row.push({
					x,
					y,
					id: id++,
					v: { x: -32, y: -32 },
				});
			}
			_tiles.push(row);
		}
		setTiles(_tiles);
	}, []);

	return (
		<div
			style={{
				position: 'relative',
				width: window.innerWidth,
				height: window.innerHeight,
				backgroundColor: 'grey',
				overflow: 'hidden',
				border: '1px solid black',
			}}
		>
			<TilePalette
				position={position}
				activeTile={activeTile}
				setActiveTile={setActiveTile}
				size={size}
				tileset={tileset}
			/>
			<Map
				tileset={tileset}
				activeTile={activeTile}
				tiles={tiles}
				size={mapSize}
			/>
		</div>
	);
}
