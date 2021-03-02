import React from 'react';
import Player from '../components/heroComp/Player';
import useDrag from '../hooks/useDraggable';

export default function GamePage() {
	const skins = ['char1', 'char2', 'char3', 'char4'];
	const { position } = useDrag('test');
	return (
		<>
			<h1
				id="test"
				style={{
					display: 'none',
					// position: 'absolute',
					top: position.y,
					left: position.x,
					zIndex: 100,
				}}
			>
				Dev-At-Station
			</h1>
			<div className="camera">
				<Player skin={skins[1]} />
			</div>
		</>
	);
}
