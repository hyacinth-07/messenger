import { Form } from 'react-router-dom';
import { useRef, useEffect } from 'react';

export default function AddNewThread({ setModal, modal }) {
	const popUp = useRef();

	useEffect(() => {
		popUp.current = document.querySelector('dialog');
		if (modal === true) {
			popUp.current.showModal();
		} else {
			popUp.current.close();
		}
	}, [modal]);

	return (
		<>
			<dialog className="w-96 h-40 border-2 border-emerald-700 border-solid">
				<Form method="post" className="flex flex-col">
					<label htmlFor="title">
						Title:
						<input
							type="text"
							placeholder="... title"
							aria-label="title-thread"
							name="title"
							id="title"
						/>
					</label>
					<button
						type="submit"
						name="intent"
						value="add"
						onClick={() => {
							setModal(false);
						}}
					>
						Add Thread
					</button>
					<button
						onClick={() => {
							setModal(false);
						}}
					>
						cancel
					</button>
				</Form>
			</dialog>
		</>
	);
}
