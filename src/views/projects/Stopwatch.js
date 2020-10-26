import React, { useEffect } from "react";

const StopwatchApp = () => {
	useEffect(() => {
		document.title = "Stopwatch";
	});

	return (
		<>
			<iframe
				style={{ width: "100vw", border: "none", height: "100vh" }}
				title="slideshow iframe"
				src={`${process.env.PUBLIC_URL}/_projects/Clock-apps/stopWatch.html`}
			/>
		</>
	);
};

export default StopwatchApp;
