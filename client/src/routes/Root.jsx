import { Outlet } from 'react-router-dom';

export default function Root() {
	return (
		<>
			<div className="h-[890px] w-[1200px] bg-slate-400">
				<Outlet />
			</div>
		</>
	);
}
