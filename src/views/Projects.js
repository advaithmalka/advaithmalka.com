import React, { useEffect, useState, useRef } from "react";
import Card from "../components/Card";
import data from "../data/project-data.json";
import ProjectBackdrop from "../assets/img/project-backdrop.jpg";
const Projects = props => {
	const [projectCards, setProjectCards] = useState();
	const projectsRef = useRef();
	useEffect(() => {
		const cleanedData = data;
		document.title = "Projects";
		setProjectCards(
			cleanedData.map((project, idx) => (
				<Card
					key={idx}
					title={project.name}
					desc={project.description}
					link={project.link}
					img={project.img}
					date={project.date}
					badges={project.badges.slice().reverse()}
				/>
			))
		);
		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	}, []);
	const onScroll = () => {
		if (projectsRef.current) {
			projectsRef.current.style.backgroundPosition = `0px ${
				Math.round(window.scrollY * -0.65) - 350
			}px`;
		}
	};
	window.addEventListener("scroll", onScroll);
	// $("#projects").css(
	// 	"background-position",
	// 	`0px ${Math.round(window.scrollY * -0.65) - 350}px`
	// );
	// console.log($(window).scrollTop());
	// console.log(window.scrollY);

	const styles = {
		paddingTop: 90,
		paddingBottom: 110,
		backgroundImage: `url(${ProjectBackdrop})`,
		backgroundSize: "cover",
		backgroundPosition: `0px ${Math.round(window.scrollY * -0.65) - 350}px`,
	};
	return (
		<>
			<div
				id="projects"
				ref={projectsRef}
				style={styles}
				className="container-fluid text-center text-white"
			>
				<h1 style={{ marginTop: 40, fontSize: 60 }}>Projects home</h1>
				<p className="lead">A collection of projects made by Advaith Malka</p>
			</div>
			<div className="container p-4">
				<div className="row">{projectCards}</div>
			</div>
		</>
	);
};
export default Projects;
