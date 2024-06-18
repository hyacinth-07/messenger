export default function Channels({ threads }) {
	return (
		<>
			<div className="w-full h-full flex justify-center items-center">
				<div>
					{threads.map((element, index) => (
						<div key={index}>{element.title}</div>
					))}
				</div>
			</div>
		</>
	);
}
