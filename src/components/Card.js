import React from "react";
import "../assets/css/Card.scss";
import {
	HTML,
	CSS,
	JS,
	PHP,
	SQL,
	DJANGO,
	REACT,
} from "../components/svg/badges";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { Link } from "react-router-dom";
const propBadges = {
	html: (
		<Tippy key={Math.floor(Math.random() * 10000)} content="HTML">
			<span className="mr-1 float-right">
				<HTML />
			</span>
		</Tippy>
	),
	css: (
		<Tippy key={Math.floor(Math.random() * 10000)} content="CSS">
			<span className="mr-1 float-right">
				<CSS />
			</span>
		</Tippy>
	),
	js: (
		<Tippy key={Math.floor(Math.random() * 10000)} content="JS">
			<span className="mr-1 float-right">
				<JS />
			</span>
		</Tippy>
	),
	php: (
		<Tippy key={Math.floor(Math.random() * 10000)} content="PHP">
			<span className="mr-1 float-right">
				<PHP />
			</span>
		</Tippy>
	),
	sql: (
		<Tippy key={Math.floor(Math.random() * 10000)} content="SQL">
			<span className="mr-1 float-right">
				<SQL />
			</span>
		</Tippy>
	),
	django: (
		<Tippy key={Math.floor(Math.random() * 10000)} content="Django">
			<span className="mr-2 float-right">
				<DJANGO />
			</span>
		</Tippy>
	),
	react: (
		<Tippy key={Math.floor(Math.random() * 10000)} content="React">
			<span className="mr-1 float-right">
				<REACT />
			</span>
		</Tippy>
	),
};
const Card = (props) => {
	const allBadges = props.badges.map((badge) => {
		return propBadges[badge];
	});

	return (
		<div className="col-lg-4 col-md-6">
			<div className="lit-card my-3" style={props.style}>
				<img className="lit-card-img" src={`${process.env.PUBLIC_URL}/img/${props.img}`} alt="Project" />
				{allBadges}
				<div className="lit-card-body">
					<h1 className="lit-card-title mb-3">{props.title}</h1>
					<p className="lit-card-text mb-3">{props.desc}</p>
					<p className="fs-13">{props.date}</p>
					{props.link.startsWith("http") ? (
						<a
							className="lit-card-btn"
							target='_blank'
							rel='noreferrer noopener'
							href={props.link}
						>View</a>
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
