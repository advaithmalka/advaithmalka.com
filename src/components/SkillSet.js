import React from "react";
import Tippy from "@tippyjs/react";
import { Row } from "react-bootstrap";
import {
	HTML,
	CSS,
	JS,
	PHP,
	SQL,
	DJANGO,
	REACT,
	NODE,
	TS,
	GRAPHQL,
	MONGODB,
	PYTHON,
	SASS,
	JQUERY,
	BOOTSTRAP,
	WEBPACK,
	APOLLO,
	SKLEARN,
	NUMPY,
	PANDAS,
	EXPRESS,
	TAILWINDCSS,
} from "./svg/badges";
const SkillSet = () => {
	const frontendSkills = [
		HTML,
		CSS,
		SASS,
		JS,
		TS,
		JQUERY,
		REACT,
		BOOTSTRAP,
		WEBPACK,
		APOLLO,
		TAILWINDCSS,
	];
	const backendSkills = [DJANGO, PHP, SQL, EXPRESS, NODE, GRAPHQL, MONGODB];
	const otherSkills = [PYTHON, NUMPY, PANDAS];
	const frontendNames = [
		"HTML",
		"CSS",
		"SASS",
		"JavaScript",
		"TypeScript",
		"Jquery",
		"React",
		"Bootstrap",
		"Webpack",
		"Apollo Client",
		"Tailwind CSS",
	];
	const backendNames = [
		"Django",
		"PHP",
		"SQL",
		"Express",
		"Node",
		"GraphQL",
		"MongoDB",
	];
	const otherNames = ["Python", "Numpy", "Pandas"];
	const frontendSkillSet = frontendSkills.map((Skill, idx) => (
		<div key={idx} className="col-auto" style={{ padding: "25px" }}>
			<Tippy content={frontendNames[idx]} offset={[0, 50]}>
				<span>
					<Skill width={100} />
				</span>
			</Tippy>
		</div>
	));
	const backendSkillSet = backendSkills.map((Skill, idx) => (
		<div key={idx} className="col-auto " style={{ padding: "25px" }}>
			<Tippy content={backendNames[idx]} offset={[0, 50]}>
				<span>
					<Skill width={90} />
				</span>
			</Tippy>
		</div>
	));
	const otherSkillSet = otherSkills.map((Skill, idx) => (
		<div key={idx} className="col-auto m-3" style={{ padding: "20px" }}>
			<Tippy content={otherNames[idx]} offset={[0, 50]}>
				<span>
					<Skill width={100} />
				</span>
			</Tippy>
		</div>
	));
	return (
		<div className="card-body mt-7">
			<hr />
			<h3 className="fw-500">Skills: </h3>
			<h4 className="text-center my-6">Frontend</h4>
			<Row
				className="justify-content-center"
				style={{ maxWidth: 800, margin: "auto" }}
			>
				{frontendSkillSet}
			</Row>
			<hr />
			<h4 className="text-center mt-8 mb-4">Backend</h4>
			<Row
				className="justify-content-center"
				style={{ maxWidth: 800, margin: "auto" }}
			>
				{backendSkillSet}
			</Row>
			<hr />
			<h4 className="text-center mt-8 mb-4">Other</h4>
			<Row
				className="justify-content-center"
				style={{ maxWidth: 800, margin: "auto" }}
			>
				{otherSkillSet}
				<div className="col-auto m-2">
					<Tippy content={"Sci-kit Learn"} offset={[0, 40]}>
						<span>
							<SKLEARN width={150} />
						</span>
					</Tippy>
				</div>
			</Row>
			<hr />
		</div>
	);
};

export default SkillSet;
