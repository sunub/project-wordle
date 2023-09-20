import React from "react";
import { KEYBOARD } from "../../constants";

const setKeyboard = (keyboard) => {
	const result = new Map();

	for (let i = 0; i < keyboard.length; i++) {
		const row = keyboard[i].split("");
		for (let j = 0; j < row.length; j++) {
			result.set(row[j], "");
		}
	}

	return result;
};

function Keyboard({ guessList }) {
	const [keyMap, setKeyMap] = React.useState(setKeyboard(KEYBOARD));

	React.useEffect(() => {
		const newMap = new Map(keyMap);
		if (guessList) {
			function reRenderKeyMap(list) {
				for (let i = 0; i < list.length; i++) {
					const key = list[i].letter;
					const status = list[i].status;
					const currStatus = newMap.get(key);

					if (currStatus === "correct") {
						continue;
					}

					if (!currStatus && currStatus !== "incorrect") {
						newMap.set(key, status);
					}
				}
			}

			reRenderKeyMap(guessList);
			setKeyMap(newMap);
		}
	}, [guessList]);

	return (
		<div className="keyboard-wrapper">
			{KEYBOARD.map((row) => (
				<div key={crypto.randomUUID()} className="keyboard-row">
					{row.split("").map((cell) => (
						<span
							key={crypto.randomUUID()}
							className={`keyboard-cell ${keyMap.get(cell)}`}
						>
							{cell}
						</span>
					))}
				</div>
			))}
		</div>
	);
}

export default Keyboard;
