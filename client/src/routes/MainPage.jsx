import { useLoaderData } from 'react-router-dom';

import Settings from '../components/Settings';
import Channels from '../components/Channels';
import Messages from '../components/Messages';

export default function MainPage() {
	const { threads } = useLoaderData();

	return (
		<>
			<div className="flex flex-col w-full h-full p-2">
				<header className="border-2 border-black border-solid min-h-12">
					<Settings />
				</header>
				<main className="grid grid-cols-4 gap-2 h-full pt-2">
					<nav className="border-2 border-red-700 border-solid col-span-1">
						<Channels threads={threads} />
					</nav>
					<section className="border-2 border-sky-700 border-solid col-span-3">
						<Messages />
					</section>
				</main>
			</div>
		</>
	);
}
