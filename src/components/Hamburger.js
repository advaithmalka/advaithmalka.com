import React from "react";
const Hamburger = props => {
	return (
		<span
			className="hamburger-icon m-0 scale-75"
			alt="toggle navbar"
			id={props.id}
		>
			<span className="bar" />
			<span className="bar" />
			<span className="bar" />
		</span>
	);
};
export default Hamburger;
