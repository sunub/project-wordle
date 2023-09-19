import React from "react";
import { KEYBOARD } from "../../constants";

function Keyboard() {
	return (
		<div className="keyboard-wrapper">
			{KEYBOARD.map((row) => (
				<div className="keyboard-row">
					{row.split("").map((cell) => (
						<span className="keyboard-cell">{cell}</span>
					))}
				</div>
			))}
		</div>
	);
}

export default Keyboard;
