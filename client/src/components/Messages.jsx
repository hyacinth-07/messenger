import { useLoaderData } from 'react-router-dom';

function MessageBubble({ body, user, likes }) {
	return (
		<>
			<article className="border-2 border-black border-solid w-2/3">
				<p>{body}</p>
				<p>{user}</p>
				<p>{likes}</p>
			</article>
		</>
	);
}

export default function Messages() {
	const { messages } = useLoaderData();

	return (
		<>
			<div className="w-full h-full flex flex-col gap-2 justify-center items-center">
				{messages[0].map((element, index) => (
					<MessageBubble
						key={index}
						body={element.body}
						user={element.user.username}
						likes={element.likes}
					/>
				))}
			</div>
		</>
	);
}
