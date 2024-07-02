import { Form } from 'react-router-dom';

export default function MessageBox() {
	return (
		<>
			<Form className="w-full basis-auto grow flex items-center justify-around border-2 border-green-600 border-solid">
				<textarea
					name="newMessage"
					id="newMessage"
					aria-label="message-box"
					rows="5"
					cols="20"
					className="resize-x"
				></textarea>
				<button>Send</button>
			</Form>
		</>
	);
}
