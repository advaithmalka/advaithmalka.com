import React from "react";
import "../assets/css/Card.scss";
import { badgeIdentifiers } from "./BadgeIdentifiers";
import "tippy.js/dist/tippy.css";
import { Link } from "react-router-dom";

const Card = props => {
	const allBadges = props.badges.map(badge => {
		return badgeIdentifiers[badge];
	});

	return (
		<div className="col-lg-4 col-md-6">
			<div className="lit-card my-4" style={props.style}>
				<img
					className="lit-card-img"
					src={`${process.env.PUBLIC_URL}/img/${props.img}`}
					alt="Project"
				/>
				{allBadges}
				<div className="lit-card-body">
					<h1 className="lit-card-title mb-4">{props.title}</h1>
					<p className="lit-card-text mb-4">{props.desc}</p>
					<p className="fs-13">{props.date}</p>
					{props.link.startsWith("http") ? (
						<a
							className="lit-card-btn"
							target="_blank"
							rel="noreferrer noopener"
							href={props.link}
						>
							View
						</a>
					) : (
						<Link to={props.link} className="text-decoration-none">
							<button className="lit-card-btn r-router-link">View</button>
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};

export default Card;
