import { Link } from 'react-router-dom';
import SettingsOptions from '../components/SettingsOptions';

export default function SettingsPage() {
	return (
		<>
			<main className="grid grid-rows-[4rem_auto] w-full h-full p-2">
				<header className="border-2 border-black border-solid col-span-full row-span-1">
					<div className="flex justify-evenly h-full items-center">
						<Link to="/app">
							<p>Go Back</p>
						</Link>
						<Link to="/">
							<button>Log Out</button>
						</Link>
					</div>
				</header>
				<section className="flex flex-col h-full border-2 border-red-700 border-solid">
					<SettingsOptions />
				</section>
			</main>
		</>
	);
}
