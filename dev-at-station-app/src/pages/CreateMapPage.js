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
	function logout() {
		localStorage.removeItem('token');
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
				<div className="flex w-full justify-between align-items-center  p-2 mb-4">
					{tokenObj.token ? (
						<>
							<div className="m-3">
								<a
									href="/loading"
									className="btn bg-yellow-400 border-black border-1 font-bold  text-red-800 rounded-xl shadow-lg"
								>
									Back
								</a>
							</div>
							<h1 className="text-red-500 font-bold text-6xl text-center mt-4">
								Retro-Game-Maker
							</h1>
							<div className="m-3">
								<a
									href={`/game/${slug.id}`}
									className="btn bg-red-800 font-bold border-black border-1 text-yellow-400 rounded-xl shadow-lg"
								>
									GamePage
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
				<div className="flex  m-3 p-2 border-white border-1  rounded-3xl">
					{tokenObj.token && (
						<div className="m-3">
							<button
								className="btn bg-green-700 font-bold border-black border-1 text-yellow-400 rounded-xl shadow-lg"
								onClick={() => save()}
								id="save"
							>
								Save
							</button>
							<div className="text-center text-2xl pt-2 pb-0 mb-0 mt-2">
								{error && <h2 className="text-red-700">{error}</h2>}
								{message && <h2 className="text-red-200">{message}</h2>}
							</div>
						</div>
					)}
					<h1 className="flex-1 text-4xl font-bold text-center text-yellow-500 m-3">
						Make Map
					</h1>
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
			<div className="flex justify-center my-36">
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
			<div className="absolute bottom-3.5 p-4 flex w-full justify-between">
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
