export default function HappyEnd({ guessLen }) {
	return (
		<div className="happy banner">
			<p>
				<strong>Congratulations!</strong> Got it in
				<strong>{guessLen}</strong>.
			</p>
		</div>
	);
}
