import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Player from '../components/heroComp/Player';
import RenderMap from '../components/mapComp/RenderMap';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default function GamePage() {
	const slug = useParams();
	const skins = ['char1', 'char2', 'char3', 'char4'];
	const [mapObj, setMapObj] = useState(null);
	const [maps, setMaps] = useState([]);
	const [mapId, setMapId] = useState('60459ec29a93ad6d9443e8e1');

	useEffect(() => {
		if (slug)
			fetch(`http://localhost:4000/map/${slug.id}/all`)
				.then((res) => res.json())
				.then((data) => setMaps(data));
	}, [slug]);

	useEffect(() => {
		fetch(`http://localhost:4000/map/${mapId}/show`)
			.then((res) => res.json())
			.then((data) => setMapObj(data));
	}, [mapId]);

	return (
		<div className="flex flex-col ">
			<div className="h-full flex w-full justify-between bg-blue-800 mb-1 p-2 border-black border-2">
				<div className="m-3">
					<a href="/loading" className="btn btn-danger">
						Back
					</a>
				</div>
				<div className="w-4/12 h-full m-3">
					<Dropdown
						options={maps.map((option) => {
							return { value: option._id, label: 'Map : ' + option._id };
						})}
						onChange={(option) => setMapId(option.value)}
						placeholder={'Select a Map!'}
					/>
				</div>
				<div className="m-3">
					<a href={`/createmap/${slug.id}`} className="btn btn-warning">
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
				{mapObj && <RenderMap mapObj={mapObj} />}

				<Player skin={skins[1]} />
			</div>
		</div>
	);
}
