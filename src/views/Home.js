import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DownArrow from "../components/DownArrow";
import FeaturedCard from "../components/FeaturedCard";
import data from "../data/project-data.json";
import { HashLink } from "react-router-hash-link";
const Home = props => {
  useEffect(() => {
    document.title = "Home";
    const body = document.querySelector("body");
    body.classList.add("body-grad");
    // body.classList.add("f-roboto");
    return () => {
      body.classList.remove("body-grad");
      // body.classList.remove("f-roboto");
    };
  }, []);
  const [featured, setFeatured] = useState();

  useEffect(() => {
    const featuredItems = ["lit bot", "medicord", "devmedia"];
    const cleanedData = data.filter(({ name }) =>
      featuredItems.includes(name.toLowerCase())
    );
    setFeatured(
      cleanedData.map((project, idx) => {
        return (
          <FeaturedCard
            key={idx}
            title={project.name}
            desc={project.description}
            link={project.link}
            img={project.img}
          />
        );
      })
    );
  }, []);

  return (
    <div id="home" className="text-white">
      <div className="container-fluid text-center mt-12 pt-12">
        <h1 className="fs-60 mt-4 fw-400">Hello World</h1>
        <p className="lead">My name is </p>
        <h1 className="fs-60 -mt-4 fw-400">Advaith Malka</h1>
        <div className="text-center mx-auto" id="home-content">
          <p className="lead">
            And this is my personal website!
            <br />
            This website includes all of my programming projects that I've built
            over the years using with a wide variety of languages.
            <br /> Use the nav links above to start exploring!
          </p>
        </div>

        <Link to="/about">
          <button className="abt-btn router-link" style={{ marginBottom: 60 }}>
            About Me!
          </button>
        </Link>
        <HashLink smooth to="#featured">
          <DownArrow />
        </HashLink>
      </div>
      <div id="featured" className="container my-12">
        <h2>Featured projects</h2>
        <div className="row">{featured}</div>
      </div>
    </div>
  );
};

export default Home;
