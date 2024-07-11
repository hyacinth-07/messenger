import { Outlet, useLoaderData } from 'react-router-dom';
import { useState } from 'react';

import Settings from '../components/Settings';
import Channels from '../components/Channels';
import AddNewThread from '../components/AddNewThread';
import OpenModal from '../components/OpenModal';

export default function MainPage() {
	const { threads } = useLoaderData();

	// dialog

	const [modal, setModal] = useState(false);

	return (
		<>
			<div className="grid grid-cols-[270px_1fr] grid-rows-[4rem_auto] w-full h-full p-2">
				<header className="border-2 border-black border-solid col-span-full row-span-1">
					<Settings />
				</header>
				<nav className="border-2 border-red-700 border-solid col-span-1 row-span-1 grid grid-rows-[3rem_auto] overflow-auto">
					<OpenModal setModal={setModal} />
					<Channels threads={threads} />
				</nav>
				<section className="border-2 border-sky-700 border-solid">
					<Outlet />
				</section>
				<AddNewThread setModal={setModal} modal={modal} />
			</div>
		</>
	);
}
