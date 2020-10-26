import React, { useEffect } from "react";
const CookieJSDocs = () => {
	useEffect(() => {
		window.addEventListener("load", function () {
			document.querySelector("footer").remove();
		});
		document.title = "Cookie JS Documentation";
	}, []);
	return (
		<>
			<iframe
				style={{ width: "100vw", height: "88vh", border: "none" }}
				title="cookie js docs iframe"
				src={`https://advaithm26.github.io/LitCSS/litcss-docs.html`}
			/>
		</>
	);
};

export default CookieJSDocs;
