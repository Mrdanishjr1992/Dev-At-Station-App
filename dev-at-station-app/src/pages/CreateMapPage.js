import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useDrag from '../hooks/useDraggable';
import TilePalette from '../components/mapComp/TilePalette';
import Map from '../components/mapComp/Map';

export default function CreateMapPage() {
	const slug = useParams();
	const tokenObj = {
		token: localStorage.getItem('token'),
	};
	const size = { width: 640, height: 288 };
	const { position } = useDrag('handlebar');
	const [activeTile, setActiveTile] = useState({ x: 1 * 32, y: 4 * 32 });
	const mapOption = '../images/maps/spring.png';
	const [tiles, setTiles] = useState([]); // coordinates for map model
	const [bgTile, setBgTile] = useState({ x: 1 * 32, y: 4 * 32 }); // bg-tile to fill map-bg
	const tileset = '../images/maps/spring.png'; // The palette used when creating map
	const mapSize = {
		width: 800,
		height: 600,
	}; // Size of the map created
	const [saveMap, setSaveMap] = useState({
		tiles: tiles,
		bgTile: bgTile,
		mapType: tileset,
		size: mapSize,
		playerId: slug.id,
	});
	const [maps, setMaps] = useState([]);
	const [error, setError] = useState('');
	const [message, setMessage] = useState('');
	useEffect(() => {
		if (slug)
			fetch(`http://localhost:4000/map/${slug.id}/all`)
				.then((res) => res.json())
				.then((data) => setMaps(data))
				.catch((err) => setError(err), setMessage(''));
	}, []);

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
	}, [setTiles]);

	function save() {
		if (saveMap.tiles.length !== 0 && maps.length < 3) {
			setSaveMap({
				tiles: tiles,
				bgTile: bgTile,
				mapType: tileset,
				size: mapSize,
				playerId: slug.id,
			});
			fetch('http://localhost:4000/map', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(saveMap),
			})
				.then((res) => res.json())
				.then(() => {
					setError('');
					setMessage('Map Saved!');
				})
				.catch((err) => {
					setError(err);
					setMessage('');
				});
		} else if (maps.length === 3) {
			setMessage('');
			setError('Map not saved, Maximum saved maps reached!');
		} else {
			setMessage('');
			setError('No tiles placed, Please edit map to save!');
		}
	}

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
			<div className="h-1/6">
				<div className="flex w-full justify-between  mb-1 p-2 border-black border-2">
					{tokenObj ? (
						<div className="m-3">
							<a
								href="/loading"
								className="btn bg-red-800 font-bold  text-yellow-400 rounded-xl shadow-lg"
							>
								Back
							</a>
						</div>
					) : (
						<div className="m-3">
							<a
								href="/"
								className="btn bg-red-800 font-bold  text-yellow-400 rounded-xl shadow-lg"
							>
								back
							</a>
						</div>
					)}
					{tokenObj && (
						<>
							<div className="m-3">
								<button
									onClick={() => save()}
									id="save"
									className="btn bg-green-800 font-bold  text-red-400 rounded-xl shadow-lg"
								>
									Save
								</button>
							</div>
							<div className="m-3">
								<a
									href={`/game/${slug.id}`}
									className="btn text-green-700 font-bold  bg-yellow-400 rounded-xl shadow-lg"
								>
									Game-Page
								</a>
							</div>
						</>
					)}
				</div>
				<h1 className="text-8xl font-bold text-center text-red-800 m-3">
					Make Map
				</h1>
				<div className="text-center text-2xl pt-2 pb-0 mb-0 mt-2">
					{error && <h2 className="text-red-700">{error}</h2>}
					{message && <h2 className="text-green-700">{message}</h2>}
				</div>
			</div>
			<TilePalette
				position={position}
				size={size}
				setBgTile={setBgTile}
				activeTile={activeTile}
				setActiveTile={setActiveTile}
				mapOption={mapOption}
				tileset={tileset}
			/>
			<div className="flex justify-center m-5">
				<Map
					tiles={tiles}
					tileset={tileset}
					size={mapSize}
					activeTile={activeTile}
					setTiles={setTiles}
					bgTile={bgTile}
					setSaveMap={setSaveMap}
				/>
			</div>
			<div className="absolute bottom-3.5 left-1/3 mx-auto flex">
				<div
					style={{
						background: `url('../images/characters/char4.png')`,
						width: 128,
						height: 128,
						backgroundSize: '384px 512px',
						imageRendering: 'crisp-edges',
					}}
				/>
				<div
					style={{
						background: `url('../images/characters/char3.png')`,
						width: 128,
						height: 128,
						backgroundSize: '384px 512px',
						imageRendering: 'crisp-edges',
					}}
				/>
				<div
					style={{
						background: `url('../images/characters/char1.png')`,
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
