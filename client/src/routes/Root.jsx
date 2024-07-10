import { Outlet } from 'react-router-dom';

export default function Root() {
	return (
		<>
			<div className="h-full w-full bg-slate-400">
				<Outlet />
			</div>
		</>
	);
}
