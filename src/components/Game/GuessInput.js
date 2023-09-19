import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessInput({ guessLen, setGuessLen, handleGuessData }) {
	const [guess, setGuess] = React.useState("");
	const [end, setEnd] = React.useState(false);

	function submitUserData(event) {
		event.preventDefault();

		setGuessLen(guessLen + 1);
		const result = handleGuessData(guess);
		if (result) setEnd(true);
		setGuess("");
	}

	return (
		<form
			onSubmit={(e) => submitUserData(e)}
			className="guess-input-wrapper"
		>
			<label htmlFor="guess-input">Enter Guess</label>
			<input
				id="guess-input"
				type="text"
				maxLength={NUM_OF_GUESSES_ALLOWED}
				required
				pattern={`[a-z, A-Z]{${NUM_OF_GUESSES_ALLOWED}}`}
				title={`${NUM_OF_GUESSES_ALLOWED}자의 단어를 입력해주세요`}
				value={guess}
				disabled={end}
				onChange={(e) => {
					setGuess(String(e.target.value).toUpperCase());
				}}
			/>
		</form>
	);
}
export default GuessInput;
