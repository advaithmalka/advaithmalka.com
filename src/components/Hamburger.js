import React from "react";
const Hamburger = props => {
	return (
		<span
			className="hamburger-icon m-0 scale-75"
			id={props.id}
			style={{cursor:'pointer'}}
		>
			<span className="bar" />
			<span className="bar" />
			<span className="bar" />
		</span>
	);
};
export default Hamburger;
