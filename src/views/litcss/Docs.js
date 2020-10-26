import React, { useEffect } from "react";
const LitcssDocs = () => {
	useEffect(() => {
		document.querySelector("footer").style.display = "none";
		document.title = "LitCSS Docs";
		return () =>{
			document.querySelector("footer").style.display = "block";
		}
	}, []);
	return (
		<iframe
			style={{ width: "100vw", height: "90vh", border: "none" }}
			title="litcss docs iframe"
			src={`${process.env.PUBLIC_URL}/_litcss/litcss-docs.html`}
		/>
	);
};	

export default LitcssDocs;
