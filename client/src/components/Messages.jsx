import { useLoaderData } from 'react-router-dom';

export default function Messages() {
	const { messages } = useLoaderData();

	return (
		<>
			<div className="w-full h-full flex justify-center items-center">
				<p>The message box!</p>
				<p>{messages}</p>
			</div>
		</>
	);
}
