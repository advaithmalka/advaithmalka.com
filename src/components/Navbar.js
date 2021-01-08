import React, { useEffect, useState, useRef } from "react";
import HomeLogo from "../assets/img/home.png";
import Hamburger from "./Hamburger";
import Logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import "../assets/css/Navbar.scss";
import data from "../data/project-data.json";
import Np from "nprogress";
import Dropdown from "./Dropdown";
function Navbar() {
	const NavBurger = useRef();
	const hamburgerClick = e => {
		NavBurger.current.classList.toggle("clicked");
		// console.log(NavBurger);
		// if (
		// 	!document.getElementById("navbarContent").classList.contains("show")
		// ) {
		// 	NavBurger.current.classList.add("clicked");
		// } else {
		// 	NavBurger.current.classList.remove("clicked");
		// }
	};
	const [projects, setProjects] = useState();
	const [projects2, setProjects2] = useState();
	const offset = 2;

	Np.configure({
		trickleRate: 0.3,
		trickleSpeed: 500,
		showSpinner: false,
	});
	useEffect(() => {
		document.body.addEventListener("click", e => {
			if (
				e.target.classList.contains("r-router-link") &&
				!(
					window.location.href === e.target.parentElement.href ||
					window.location.href === e.target.parentElement.parentElement.href
				)
			) {
				Np.inc(0.5);
				let oldHref = window.location.href;
				const interval = setInterval(() => {
					let newHref = window.location.href;
					if (oldHref !== newHref) {
						Np.done();
						clearInterval(interval);
					}
				}, 30);
			}
		});
		const libs = ["litcss", "cookiejs"];
		const displayProjects = ({ link, name }, idx) => {
			if (libs.includes(name.toLowerCase())) return;
			return (
				<li className="nav-item" key={idx}>
					{link.startsWith("http") ? (
						<a
							className="nav-link text-small text-decoration-none"
							style={{ paddingBottom: 0 }}
							target="_blank"
							rel="noreferrer noopener"
							href={link}
						>
							{name}
						</a>
					) : (
						<Link className="text-decoration-none" to={link}>
							<span
								className="nav-link text-small r-router-link"
								style={{ paddingBottom: 0 }}
							>
								{name}
							</span>
						</Link>
					)}
				</li>
			);
		};
		const cleanedData = data
			.reverse()
			.slice(0, Math.floor(data.length / 2) + offset);
		setProjects(
			cleanedData.map((project, idx) => {
				return displayProjects(project, idx);
			})
		);
		const cleanedData2 = data.slice(
			Math.floor(data.length / 2) + offset,
			data.length
		);
		setProjects2(
			cleanedData2.map((project, idx) => {
				return displayProjects(project, idx);
			})
		);
	}, []);
	return (
		<>
			<nav
				id="navbar"
				className="sticky-top navbar navbar-expand-lg navbar-light nav-color py-2 custom-shadow"
			>
				<Link to="/" style={{ textDecoration: "none" }}>
					<span className="navbar-brand d-block d-lg-none">
						<img
							className="r-router-link"
							src={Logo}
							alt="Logo"
							width="40px"
							height="38.4px"
						/>
					</span>
				</Link>
				<button
					onClick={hamburgerClick}
					type="button"
					data-toggle="collapse"
					data-target="#navbarContent"
					aria-controls="navbars"
					aria-expanded="false"
					aria-label="Toggle navigation"
					className="navbar-toggler bg-white"
					style={{ border: "none !important", cursor: "pointer" }}
					id="navbar-hamburger"
				>
					<Hamburger burgerRef={NavBurger} id="inner-nav-hamburger" />
				</button>
				<div id="navbarContent" className="collapse navbar-collapse">
					<Link to="/">
						<div id="home-logo" className="navbar-brand d-none d-lg-block">
							<img
								className="r-router-link"
								alt="go to home page"
								src={HomeLogo}
								width="45px"
							/>
						</div>
					</Link>
					<ul className="navbar-nav mx-auto">
						<Link to="/projects" style={{ textDecoration: "none" }}>
							<li className="nav-item nav-content nav-link nav-title text-uppercase fs-16 r-router-link">
								Projects
							</li>
						</Link>
						<Dropdown projects={projects} projects2={projects2} />
						{/* <Link to="/litcss" style={{ textDecoration: "none" }}>
							<li className="nav-item nav-content nav-link nav-title text-uppercase fs-16 r-router-link">
								LitCSS
							</li>
						</Link> */}
						<a
							href="https://advaithmalka.medium.com/"
							className="text-decoration-none"
							target="_blank"
							rel="noreferrer"
						>
							<li className="nav-item nav-content nav-link nav-title text-uppercase fs-16">
								Blog
							</li>
						</a>

						<Link to="/about" style={{ textDecoration: "none" }}>
							<li className="nav-item nav-content nav-link nav-title text-uppercase fs-16 r-router-link">
								About
							</li>
						</Link>
					</ul>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
