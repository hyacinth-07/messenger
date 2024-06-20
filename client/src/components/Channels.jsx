function formatDate(date) {
	let newDate = new Date(date);
	newDate = new Intl.DateTimeFormat('en-US', {
		dateStyle: 'short',
		timeStyle: 'short',
	}).format(newDate);

	return newDate;
}

function Card({ title, createdAt }) {
	const date = formatDate(createdAt);

	return (
		<>
			<article className="border-2 border-black border-solid w-full">
				<p>{title}</p>
				<p>{date}</p>
				<button>X</button>
			</article>
		</>
	);
}

export default function Channels({ threads }) {
	return (
		<>
			<div className="w-full h-full flex flex-col justify-start items-start gap-1">
				{threads.map((element, index) => (
					<Card
						key={index}
						title={element.title}
						createdAt={element.createdAt}
					/>
				))}
			</div>
		</>
	);
}
