import React, { useEffect } from "react";

const ClockApp = () => {
	useEffect(() => {
		document.title = "Clock";
	});
	return (
		<>
			<iframe
				style={{ width: "100vw", border: "none", height: "100vh" }}
				title="slideshow iframe"
				src={`${process.env.PUBLIC_URL}/_projects/Clock-apps/clock.html`}
			/>
		</>
	);
};

export default ClockApp;
