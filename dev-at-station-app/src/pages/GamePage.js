import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Player from '../components/heroComp/Player';
import RenderMap from '../components/mapComp/RenderMap';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import starterMap from '../components/miscComp/starterMap';

export default function GamePage() {
	const slug = useParams();
	const skins = ['char1', 'char2', 'char3', 'char4'];
	const [skin, setSkin] = useState('char3');
	const [mapObj, setMapObj] = useState(null);
	const [mapId, setMapId] = useState('');
	const [maps, setMaps] = useState([]);
	const token = localStorage.getItem('token');

	useEffect(() => {
		if (slug.id)
			fetch(`http://localhost:4000/map/${slug.id}/all`)
				.then((res) => res.json())
				.then((data) => setMaps(data));
	}, [slug, mapId]);

	useEffect(() => {
		if (mapId)
			fetch(`http://localhost:4000/map/${mapId}/show`)
				.then((res) => res.json())
				.then((data) => setMapObj(data));
		if (!mapId) setMapObj(starterMap);
	}, [mapId]);

	function deleteMap() {
		fetch(`http://localhost:4000/map/${mapId}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then(() => setMapId(''));
	}
	function logout() {
		localStorage.removeItem('token');
	}
	return (
		<div className="flex flex-col ">
			<div className="flex w-full justify-between align-items-center  p-2 mb-4">
				{token ? (
					<>
						<div className="m-3">
							<a
								href="/loading"
								className="btn bg-yellow-400 font-bold border-black border-1 text-red-800 rounded-xl shadow-lg"
							>
								Back
							</a>
						</div>
						<h1 className="text-red-500 font-bold text-6xl text-center mt-4">
							Retro-Game-Maker
						</h1>
						<div className="m-3">
							<a
								href={`/createmap/${slug.id}`}
								className="btn bg-red-800 font-bold border-black border-1 text-yellow-400 rounded-xl shadow-lg"
							>
								MapPage
							</a>
						</div>
					</>
				) : (
					<>
						<div className="m-3">
							<a
								href="/about"
								className="btn bg-green-800 font-bold border-black border-1  text-yellow-400 rounded-xl shadow-lg"
							>
								about
							</a>
						</div>
						<h1 className="text-red-500 font-bold text-6xl text-center mt-4">
							Retro-Game-Maker
						</h1>
						<div className="m-3">
							<a
								href="/"
								onClick={() => logout()}
								className="btn bg-red-800 font-bold border-black border-1 text-yellow-400 rounded-xl shadow-lg"
							>
								back
							</a>
						</div>
					</>
				)}
			</div>
			<div className="h-full flex w-full justify-between  mb-1 p-2 ">
				{token && (
					<>
						<div className="w-2/6 h-full m-3">
							<Dropdown
								options={skins.map((option) => {
									return { value: option, label: 'Character : ' + option };
								})}
								onChange={(option) => setSkin(option.value)}
								placeholder={'Select a Character!'}
							/>
						</div>
						<div className="w-4/12 h-full m-3">
							<Dropdown
								options={maps.map((option) => {
									return {
										value: option._id,
										label: `Map : ${option._id}`,
									};
								})}
								onChange={(option) => setMapId(option.value)}
								placeholder={'Select a Map!'}
							/>
							<div className="p-2 flex flex-row-reverse w-full justify-between align-items-center">
								<button
									className="btn  right-0 bg-red-800 font-bold border-black border-1 text-yellow-400 rounded-xl shadow-lg"
									onClick={() => deleteMap()}
								>
									delete
								</button>
								<p className="text-white text-lg">
									Delete Current Map (On View Port)
								</p>
							</div>
						</div>
					</>
				)}
			</div>
			<h1 className="flex-grow text-yellow-500 font-bold text-4xl text-center m-4">
				PlayGame
			</h1>
			<div className="camera">
				{mapObj && <RenderMap mapObj={mapObj} />}
				<Player skin={skin} />
			</div>
			<div className="flex mx-auto">
				<div
					className="m-24"
					style={{
						background: `url('../images/characters/char1.png')`,
						width: 128,
						height: 128,
						backgroundSize: '384px 512px',
						imageRendering: 'crisp-edges',
					}}
				/>
				<div
					className="m-24"
					style={{
						background: `url('../images/characters/char3.png')`,
						width: 128,
						height: 128,
						backgroundSize: '384px 512px',
						imageRendering: 'crisp-edges',
					}}
				/>
				<div
					className="m-24"
					style={{
						background: `url('../images/characters/char4.png')`,
						width: 128,
						height: 128,
						backgroundSize: '384px 512px',
						imageRendering: 'crisp-edges',
					}}
				/>
			</div>
		</div>
	);
}
