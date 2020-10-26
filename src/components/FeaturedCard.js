import React from "react";
import "../assets/css/Card.scss";
import Card from "./Card";
const FeaturedCards = (props) => {
	return (
		<Card
			style={{ backgroundColor: "white" }}
			badges={[]}
			link={props.link}
			title={props.title}
			desc={props.desc}
			img={props.img}
		/>
	);
};

export default FeaturedCards;
