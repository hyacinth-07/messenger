import { Form } from 'react-router-dom';
import { useEffect, useRef } from 'react';

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
			<dialog>
				<Form
					method="post"
					className="w-full h-12 border-2 border-emerald-700 border-solid"
				>
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
				</Form>
			</dialog>
		</>
	);
}
