export default function getRandomNumber() {
	const min = 1;
	const max = 10;
	const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
	return randomNumber;
}
