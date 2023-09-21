import Guess from "../Guess/index";
import { range } from "../../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../../constants";

function GuessResults({ guesses, answer }) {
	return (
		<div className="guess-results">
			{range(NUM_OF_GUESSES_ALLOWED).map((num) => (
				<Guess
					key={`${num}-${Math.random()}`}
					value={guesses[num]}
					answer={answer}
				/>
			))}
		</div>
	);
}

export default GuessResults;
