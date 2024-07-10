import { useLoaderData } from 'react-router-dom';
import MessageBox from './MessageBox';

function MessageBubble({ body, user, likes }) {
	return (
		<>
			<article className="border-2 border-black border-solid m-2 p-2 w-fit">
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
			<div className="w-full h-full flex flex-col items-center">
				<div className="w-full h-[690px] overflow-auto">
					{messages[0].map((element, index) => (
						<MessageBubble
							key={index}
							body={element.body}
							user={element.user.username}
							likes={element.likes}
						/>
					))}
				</div>
				<MessageBox />
			</div>
		</>
	);
}
