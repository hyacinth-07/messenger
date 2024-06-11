import { Link } from 'react-router-dom';

export default function LoginPage() {
	return (
		<>
			<main className="flex justify-evenly items-center w-full h-full">
				<Link to="/app">
					<button className="min-w-56 min-h-24 border-2 border-black border-solid">
						Go the App
					</button>
				</Link>
			</main>
		</>
	);
}
