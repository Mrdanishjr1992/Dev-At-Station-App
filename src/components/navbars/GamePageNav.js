import { useParams } from 'react-router-dom';

export default function GamePageNav({ token, logout }) {
	const slug = useParams();
	return (
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
					<h1 className="logo text-red-500 font-bold text-6xl text-center mt-4">
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
					<h1 className="logo text-red-500 font-bold text-6xl text-center mt-4">
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
	);
}
