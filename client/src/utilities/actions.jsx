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
					comments: [messages],
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
