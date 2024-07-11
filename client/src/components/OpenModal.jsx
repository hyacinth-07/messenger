export default function OpenModal({ setModal }) {
	return (
		<>
			<section className="w-full h-full border-2 border-emerald-700 border-solid">
				<button
					onClick={(e) => {
						e.preventDefault();
						setModal(true);
					}}
				>
					Add Thread
				</button>
			</section>
		</>
	);
}
