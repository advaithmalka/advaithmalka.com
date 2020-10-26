import React, { useEffect } from "react";

const TimerApp = () => {
	useEffect(() => {
		document.title = "Timer";
	});

	return (
		<>
			<iframe
				style={{ width: "100vw", border: "none", height: "100vh" }}
				title="timer iframe"
				src={`https://advaithm26.github.io/old-website/timer.html`}
			/>
		</>
	);
};

export default TimerApp;
