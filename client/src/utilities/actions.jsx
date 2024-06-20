async function postNewThread() {
	try {
		const data = await fetch('http://localhost:3000/app/', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ title: 'Cricket Thread', comments: [] }),
		});
		return data;
	} catch (error) {
		console.log(error);
		return null;
	}
}

async function deleteThread() {
	try {
		const data = await fetch('http://localhost:3000/app/', {
			method: 'DELETE',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ id: '6673f545fe7361fa70f30bcb' }),
		});
		return data;
	} catch (error) {
		console.log(error);
		return null;
	}
}

export async function threadActions({ request }) {
	let formData = await request.formData();
	let intent = formData.get('intent');

	let deleteId = formData.get('id');

	if (intent === 'add') {
		try {
			const data = await fetch('http://localhost:3000/app/', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ title: 'Anime Thread', comments: [] }),
			});
			return data;
		} catch (error) {
			console.log(error);
			return null;
		}
	}

	if (intent === 'delete') {
		try {
			const data = await fetch('http://localhost:3000/app/', {
				method: 'DELETE',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ id: deleteId }),
			});
			return data;
		} catch (error) {
			console.log(error);
			return null;
		}
	}

	return null;
}
