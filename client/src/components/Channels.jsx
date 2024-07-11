import { Form, Link } from 'react-router-dom';

function formatDate(date) {
	let newDate = new Date(date);
	newDate = new Intl.DateTimeFormat('en-US', {
		dateStyle: 'short',
		timeStyle: 'short',
	}).format(newDate);

	return newDate;
}

function DeleteForm({ id }) {
	return (
		<>
			<Form method="delete">
				<button type="submit" name="intent" value="delete">
					Delete Thread
				</button>
				<input type="hidden" name="id" defaultValue={id}></input>
			</Form>
		</>
	);
}

function Card({ title, createdAt, id }) {
	const date = formatDate(createdAt);

	return (
		<>
			<article className="border-2 border-black border-solid w-full">
				<p>{title}</p>
				<p>{date}</p>
				<DeleteForm id={id} />
				<Link to={`${id}`}>to messages</Link>
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
						id={element._id}
					/>
				))}
			</div>
		</>
	);
}
