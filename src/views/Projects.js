import React, { useEffect, useState, useRef } from "react";
import Card from "../components/Card";
import data from "../data/project-data.json";
import ProjectBackdrop from "../assets/img/project-backdrop.jpg";
import { onScroll } from "../util/onScroll";

const Projects = props => {
  const [projectCards, setProjectCards] = useState();
  const projectsRef = useRef();
  useEffect(() => {
    const cleanedData = data;
    document.title = "Projects";
    window.addEventListener("scroll", () => onScroll(projectsRef, 350));

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
      window.removeEventListener("scroll", () => onScroll(projectsRef, 350));
    };
  }, []);

  const styles = {
    height: 370,
    backgroundImage: `url(${ProjectBackdrop})`,
    backgroundSize: "cover",
    backgroundPosition: window.matchMedia("(min-width: 1000px)").matches
      ? `0px ${Math.round(window.scrollY * -0.65) - 350}px`
      : `0px ${0}px`,
  };
  return (
    <>
      <div
        ref={projectsRef}
        className="container-fluid text-center text-white flex items-center"
        style={styles}
      >
        <div className="mx-auto">
          <h1 className="text-7xl my-6">Projects</h1>
          <p className="lead">A collection of projects made by Advaith Malka</p>
        </div>
      </div>

      <div className="container p-4">
        <div className="row">{projectCards}</div>
      </div>
    </>
  );
};
export default Projects;
