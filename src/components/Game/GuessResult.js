import Guess from "./Guess";

/**
 *
 * @param {string[]} guessList
 * @returns
 */
function GuessResult({ guessList }) {
	return (
		<div className="guess-results">
			<Guess guessList={guessList} />
		</div>
	);
}

export default GuessResult;
