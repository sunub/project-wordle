import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../../constants";

function GuessInput({ handleSubmitGuess }) {
	const [tentativeGuess, setTentativeGuess] = React.useState("");
	const [end, setEnd] = React.useState(false);

	function handleSubmit(event) {
		event.preventDefault();

		if (tentativeGuess.length !== NUM_OF_GUESSES_ALLOWED) {
			window.alert("Please enter exactly 5 characters..😢");
			return;
		}
		handleSubmitGuess(tentativeGuess);
		setTentativeGuess("");
	}

	return (
		<form onSubmit={(e) => handleSubmit(e)} className="guess-input-wrapper">
			<label htmlFor="guess-input">Enter Guess</label>
			<input
				required
				minLength={NUM_OF_GUESSES_ALLOWED}
				maxLength={NUM_OF_GUESSES_ALLOWED}
				id="guess-input"
				type="text"
				pattern={`[a-zA-Z]{${NUM_OF_GUESSES_ALLOWED}}`}
				title={`${NUM_OF_GUESSES_ALLOWED}자의 단어를 입력해주세요`}
				value={tentativeGuess}
				onChange={(e) => {
					const nextGuess = e.target.value.toUpperCase();
					setTentativeGuess(nextGuess);
				}}
				disabled={end}
			/>
		</form>
	);
}
export default GuessInput;
