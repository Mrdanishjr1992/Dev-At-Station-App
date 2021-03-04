import React, { useEffect, useState } from 'react';
import useDrag from '../hooks/useDraggable';
import TilePalette from '../components/mapComp/TilePalette';
import Map from '../components/mapComp/Map';

export default function CreateMapPage() {
	const size = { width: 640, height: 288 };
	const { position } = useDrag('handlebar');
	const [activeTile, setActiveTile] = useState({ x: 1 * 32, y: 4 * 32 });
	const [mapOption, setMapOption] = useState('../images/maps/spring.png');
	const [tiles, setTiles] = useState([]); // coordinates for map model
	const [bgTile, setBgTile] = useState({ x: 1 * 32, y: 4 * 32 }); // bg-tile to fill map-bg
	const [tileset, setTileset] = useState('../images/maps/spring.png'); // The palette used when creating map
	const mapSize = {
		width: 800,
		height: 600,
	}; // Size of the map created

	const mapOptions = ['../images/maps/spring.png', '../images/maps/winter.png'];
	useEffect(() => {
		const _tiles = [];
		let id = 0;

		for (let y = 0; y < 600; y = y + 32) {
			const row = [];
			for (let x = 0; x < 800; x = x + 32) {
				row.push({
					x,
					y,
					id: id++,
					v: { x: 1 * 32, y: 4 * 32 },
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
				backgroundColor: 'blue-steel',
				overflow: 'hidden',
				border: '1px solid black',
			}}
		>
			<div className="inline-block bg-blue-800 mb-1 p-2 border-black border-2">
				<a href="/" className="btn btn-danger ml-2 mr-1">
					Esc
				</a>
				<button className="btn btn-success ml-1 mr-2">Save</button>
			</div>

			<TilePalette
				tileset={tileset}
				position={position}
				size={size}
				activeTile={activeTile}
				setActiveTile={setActiveTile}
				setBgTile={setBgTile}
				mapOptions={mapOptions}
				mapOption={mapOption}
				setMapOption={setMapOption}
				setTileset={setTileset}
			/>
			<Map
				tiles={tiles}
				tileset={tileset}
				size={mapSize}
				activeTile={activeTile}
				setTiles={setTiles}
				bgTile={bgTile}
			/>
		</div>
	);
}
