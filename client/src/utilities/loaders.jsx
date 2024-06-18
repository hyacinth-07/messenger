export async function threadsLoader() {
	// cors error to be solved

	let threads;

	try {
		threads = fetch('http://127.0.0.1:5173/app/');
	} catch (error) {
		console.log(error);
	}

	return { threads };
}
