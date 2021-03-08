import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Player from '../components/heroComp/Player';
import RenderMap from '../components/mapComp/RenderMap';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default function GamePage() {
	let { slug } = useParams();
	const skins = ['char1', 'char2', 'char3', 'char4'];
	const [mapObj, setMapObj] = useState({
		bgTile: { x: 1 * 32, y: 4 * 32 },
		mapTiles: [],
		mapType: '../images/maps/spring.png',
	});
	const [maps, setMaps] = useState([]);
	const [map, setMap] = useState();

	useEffect(() => {
		fetch(`http://localhost:4000/map/${slug}/all`)
			.then((res) => res.json())
			.then((data) => setMaps({ data }));
	}, []);

	useEffect(() => {
		if (map)
			fetch(`http://localhost:4000/map/${map._id}/show`)
				.then((res) => res.json())
				.then((data) =>
					setMapObj({
						bgTile: data.bgTile,
						mapTiles: data.tiles,
						mapType: data.mapType,
					})
				);
	}, [map]);

	return (
		<div className="flex flex-col ">
			<div className="flex w-full justify-between bg-blue-800 mb-1 p-2 border-black border-2">
				<div className="m-3">
					<a href="/loading" className="btn btn-danger">
						Back
					</a>
				</div>
				<div>
					<Dropdown
						options={maps}
						onChange={() => setMap()}
						value={mapObj}
						placeholder="Select an option"
					/>
				</div>
				<div className="m-3">
					<a href={`/createmap/${slug}`} className="btn btn-warning">
						Map-Page
					</a>
				</div>
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
		</div>
	);
}
