import React, { useEffect } from "react";

const TimerApp = () => {
	useEffect(() => {
		document.title = "Timer";
	});

	return (
		<>
			<iframe
				style={{ width: "100vw", border: "none", height: "100vh" }}
				title="slideshow iframe"
				src={`${process.env.PUBLIC_URL}/_projects/Clock-apps/timer.html`}
			/>
		</>
	);
};

export default TimerApp;
