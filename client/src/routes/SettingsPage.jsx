import { Link } from 'react-router-dom';
import SettingsOptions from '../components/SettingsOptions';

export default function SettingsPage() {
	return (
		<>
			<main className="flex flex-col w-full h-full p-2">
				<header className="border-2 border-black border-solid min-h-12">
					<div className="flex justify-evenly h-full items-center">
						<Link to="/app">
							<p>Go Back</p>
						</Link>
						<Link to="/">
							<button>Log Out</button>
						</Link>
					</div>
				</header>
				<section className="flex flex-col h-full mt-2 border-2 border-red-700 border-solid">
					<SettingsOptions />
				</section>
			</main>
		</>
	);
}
