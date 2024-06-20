export async function postNewThread() {
	try {
		const data = await fetch('http://localhost:3000/app/', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ title: 'Car Thread', comments: [] }),
		});
		console.log('created new thread!');
		return data;
	} catch (error) {
		console.log(error);
		return null;
	}
}
