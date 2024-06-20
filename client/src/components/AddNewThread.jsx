import { Form } from 'react-router-dom';

export default function AddNewThread() {
	return (
		<>
			<Form
				method="post"
				className="w-full h-12 border-2 border-emerald-700 border-solid"
			>
				<button type="submit" name="intent" value="add">
					Add Thread
				</button>
			</Form>
		</>
	);
}
