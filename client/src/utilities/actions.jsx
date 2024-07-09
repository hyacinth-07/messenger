import createMessages from './createMessages';

export async function threadActions({ request }) {
	let formData = await request.formData();
	let intent = formData.get('intent');

	let deleteId = formData.get('id');
	let addTitle = formData.get('title');

	if (intent === 'add') {
		try {
			const messages = await createMessages();
			const data = await fetch('http://localhost:3000/app/', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					title: addTitle,
					comments: [messages.messages.comments],
				}),
			});
			return data;
		} catch (error) {
			console.log(error);
			return null;
		}
	}

	if (intent === 'delete') {
		try {
			await fetch('http://localhost:3000/app/', {
				method: 'DELETE',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ id: deleteId }),
			});
			return null;
		} catch (error) {
			console.log(error);
			return null;
		}
	}

	return null;
}

export async function messageActions({ request, params }) {
	let formData = await request.formData();
	let [text, button] = formData;
	let intent = formData.get('intent');

	if (intent === 'send') {
		try {
			const data = await fetch(`http://localhost:3000/app/${params.id}`, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ body: text[1], likes: 0, user: 'Me' }),
			});
			return data;
		} catch (error) {
			console.log(error);
			return null;
		}
	}

	return null;
}
