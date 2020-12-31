import React, { useEffect } from "react";

const StopwatchApp = () => {
	useEffect(() => {
		document.title = "Stopwatch";
	});

	return (
		<>
			<iframe
				style={{ width: "100vw", border: "none", height: "100vh" }}
				title="stopwatch iframe"
				src={`https://advaithmalka.github.io/old-website/stopWatch.html`}
			/>
		</>
	);
};

export default StopwatchApp;
