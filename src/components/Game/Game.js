import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";
import GuessInput from "./GuessInput/index";
import GuessResults from "./GuessResult/index";
import WonBanner from "./WonBanner/index";
import LostBanner from "./LostBanner/index";
import Keyboard from "./Keyboard";

function Game({ answer }) {
	const [guesses, setGuesses] = React.useState([]);
	const [gameStatus, setGameStatus] = React.useState("running");

	const handleSubmitGuess = (tentativeGuess) => {
		setGuesses([...guesses, tentativeGuess]);

		if (tentativeGuess.toUpperCase() === answer) {
			setGameStatus("won");
		} else if (guesses.length >= NUM_OF_GUESSES_ALLOWED) {
			setGameStatus("lost");
		}
	};

	const validatedGuesses = guesses.map((guess) => checkGuess(guess, answer));
	return (
		<div className="game-wrapper">
			<GuessResults guesses={guesses} answer={answer} />
			<GuessInput handleSubmitGuess={handleSubmitGuess} />
			<Keyboard validatedGuesses={validatedGuesses} />
			{gameStatus === "won" && (
				<WonBanner numOfGuesses={guesses.length} />
			)}
			{gameStatus === "lost" && <LostBanner answer={answer} />}
		</div>
	);
}

export default Game;
