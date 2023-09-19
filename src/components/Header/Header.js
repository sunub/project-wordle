import React from "react";
import { WORDS } from "../../data";
import { sample } from "../../utils";

function Header({ setAnswer }) {
	return (
		<header>
			<h1>Word Game</h1>
			<button
				className="reset-btn"
				onClick={() => {
					setAnswer(() => {
						const newAnswer = sample(WORDS);
						return newAnswer;
					});
				}}
			>
				Restart
			</button>
		</header>
	);
}

export default Header;
