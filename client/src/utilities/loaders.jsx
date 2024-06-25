export async function threadsLoader() {
	let threads;

	try {
		const data = await fetch('http://localhost:3000/app/');
		threads = await data.json();
	} catch (error) {
		console.log(error);
	}

	return { threads };
}

export async function messagesLoader() {
	let messages;

	try {
		const data = await fetch('https://dummyjson.com/comments');
		messages = await data.json();
	} catch (error) {
		console.log(error);
	}

	return { messages };
}
