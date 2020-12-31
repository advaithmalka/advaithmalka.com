import React, { useEffect } from "react";

const ClockApp = () => {
	useEffect(() => {
		document.title = "Clock";
	});
	return (
		<>
			<iframe
				style={{ width: "100vw", border: "none", height: "100vh" }}
				title="clock iframe"
				src={`https://advaithmalka.github.io/old-website/clock.html`}
			/>
		</>
	);
};

export default ClockApp;
