import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";
import GuessInput from "./GuessInput";
import GuessResult from "./GuessResult";
import HappyEnd from "./HappyEnd";
import SadEnd from "./SadEnd";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [win, setWin] = React.useState(false);
	const [lose, setLose] = React.useState(false);
	const [guessLen, setGuessLen] = React.useState(1);
	const [guessList, setGuessList] = React.useState(
		Array.from({ length: NUM_OF_GUESSES_ALLOWED }, () =>
			Array.from({ length: NUM_OF_GUESSES_ALLOWED }, () => ({
				letter: "",
				status: "",
			}))
		)
	);

	const handleGuessData = (guess) => {
		const newList = [...guessList];
		const results = checkGuess(guess, answer);

		let isWin = range(0, NUM_OF_GUESSES_ALLOWED, 1);
		for (let i = 0; i < results.length; i++) {
			newList[guessLen - 1][i] = results[i];
			isWin[i] = results[i].status === "correct";
		}
		setGuessList(newList);
		console.log(isWin);
		if (guessLen === NUM_OF_GUESSES_ALLOWED) {
			setLose(true);
			return true;
		}
		if (!isWin.includes(false)) {
			setWin(isWin);
			return true;
		}
	};

	return (
		<>
			<GuessResult guessList={guessList} />
			<GuessInput
				handleGuessData={handleGuessData}
				guessLen={guessLen}
				setGuessLen={setGuessLen}
			/>
			{win && <HappyEnd guessLen={guessLen} />}
			{lose && <SadEnd answer={answer} />}
		</>
	);
}

export default Game;
