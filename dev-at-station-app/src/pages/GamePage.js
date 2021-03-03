import React from 'react';
import Player from '../components/heroComp/Player';

export default function GamePage() {
	const skins = ['char1', 'char2', 'char3', 'char4'];

	return (
		<>
			<h1>Dev-At-Station</h1>
			<div className="camera">
				<Player skin={skins[1]} />
			</div>
		</>
	);
}
