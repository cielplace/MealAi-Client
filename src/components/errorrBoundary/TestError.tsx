import React, { useState } from "react";

const ThrowCounter = () => {
	const [count, setCount] = useState(5);

	const throwCounterClickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		setCount(count - 1);
	};

	if (count <= 0) {
		throw new Error("에러 발생 !!");
	}

	return (
		<button color="primary" onClick={(e) => throwCounterClickHandler(e)}>
			Throw Error {count}
		</button>
	);
};

export default ThrowCounter;
