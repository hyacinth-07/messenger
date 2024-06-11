import { Link } from 'react-router-dom';

export default function Settings() {
	return (
		<>
			<div className="flex justify-evenly h-full items-center">
				<Link to="/app/settings">
					<p>Settings</p>
				</Link>
				<Link to="/">
					<button>Log Out</button>
				</Link>
			</div>
		</>
	);
}
