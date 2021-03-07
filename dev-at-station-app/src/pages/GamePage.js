import React, { useEffect, useState } from 'react';
import Player from '../components/heroComp/Player';
import RenderMap from '../components/mapComp/RenderMap';
// import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default function GamePage() {
	const skins = ['char1', 'char2', 'char3', 'char4'];
	const [maps, setMaps] = useState([]);
	// const [map, setMap] = useState();
	const [mapObj, setMapObj] = useState({
		bgTile: { x: 1 * 32, y: 4 * 32 },
		mapTiles: [],
		mapType: '../images/maps/spring.png',
	});

	useEffect(() => {
		fetch('http://localhost:4000/map')
			.then((res) => res.json())
			.then((data) => setMaps({ data }));
	}, []);

	useEffect(() => {
		fetch(`http://localhost:4000/map/${'6041545a8cd4e10b8eea63f4'}`)
			.then((res) => res.json())
			.then((data) =>
				setMapObj({
					bgTile: data.bgTile,
					mapTiles: data.tiles,
					mapType: data.mapType,
				})
			);
	}, []);

	return (
		<>
			<div>
				<a href="/" className="btn btn-primary">
					Esc
				</a>
			</div>
			<h1 className="text-8xl text-center text-red-800 mt-3">
				Retro-Game-Maker
			</h1>
			<div
				className="camera"
				style={{
					position: 'relative',
					width: 800,
					height: 600,
				}}
			>
				<RenderMap
					bgTile={mapObj.bgTile}
					mapTile={mapObj.mapTiles}
					mapTypes={mapObj.mapType}
				/>
				<Player skin={skins[1]} />
			</div>
			{/* <Dropdown
				options={maps}
				onChange={() => setMap()}
				value={mapObj}
				placeholder="Select an option"
			/> */}
		</>
	);
}
