import { useLoaderData } from 'react-router-dom';
import MessageBox from './MessageBox';

function MessageBubble({ body, user, likes }) {
	return (
		<>
			<article className="border-2 border-black border-solid m-2 w-full">
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
				<div className="w-11/12 basis-5/6 shrink-0">
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
