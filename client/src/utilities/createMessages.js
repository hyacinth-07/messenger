import getRandomNumber from './randomNumber';

export default async function createMessages() {
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
