import React from "react";

function Guess({ guessList }) {
	return (
		<>
			{guessList.map((row) => (
				<p key={crypto.randomUUID()} className="guess">
					{row.map(({ letter, status }) => (
						<span
							key={crypto.randomUUID()}
							className={`cell ${status}`}
						>
							{letter}
						</span>
					))}
				</p>
			))}
		</>
	);
}

export default Guess;
