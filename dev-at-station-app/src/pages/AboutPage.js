import React from 'react';

export default function AboutPage() {
	return (
		<div className="p-5">
			<div>
				<a href="/" className="btn btn-primary">
					Esc
				</a>
			</div>
			<div className="h-full d-flex flex-column align-items-center align-content-center ">
				<h1 className="start-header text-4xl m-4">Retro-Game-Maker</h1>
				<p className="p-2">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
					cupiditate ducimus in nisi placeat quam laboriosam commodi ad.
					Perspiciatis tempore illo suscipit aspernatur a numquam debitis dolore
					nulla quae quibusdam laudantium maiores delectus tenetur, provident
					rerum voluptates ipsum deleniti. Debitis laborum recusandae delectus
					est magni nulla suscipit autem a? Quas!
				</p>
				<div
					className="m-24"
					style={{
						background: `url('../images/characters/char3.png')`,
						width: 128,
						height: 128,
						backgroundSize: '384px 512px',
						imageRendering: 'crisp-edges',
					}}
				></div>
			</div>
		</div>
	);
}
