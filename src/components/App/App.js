import React from "react";
import Game from "../Game";
import Header from "../Header";
import { WORDS } from "../../data";
import { sample } from "../../utils";

function App() {
	const [answer, setAnswer] = React.useState(sample(WORDS));
	console.log(answer);
	return (
		<div className="wrapper">
			<Header setAnswer={setAnswer} />

			{answer && <Game key={answer} answer={answer} />}
		</div>
	);
}

export default App;
