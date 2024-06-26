import getRandomNumber from './randomNumber';

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
	const num = getRandomNumber();

	try {
		const data = await fetch(
			`https://dummyjson.com/comments/?limit=7&skip=${num}`
		);
		messages = await data.json();
	} catch (error) {
		console.log(error);
	}

	return { messages };
}
