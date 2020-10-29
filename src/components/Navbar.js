import React, { useEffect, useState } from "react";
import HomeLogo from "../assets/img/home.png";
import ChevronDown from "./svg/chevron-down";
import Hamburger from "./Hamburger";
import Logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import "../assets/css/Navbar.scss";
import data from "../data/project-data.json";
import Np from "nprogress";
function Navbar() {
	const NavBurger = document.getElementById("inner-nav-hamburger")
	const hamburgerClick = (e) => {
		if(!document.getElementById('navbarContent').classList.contains('show')){
			NavBurger.classList.add("clicked");
		}else{
			NavBurger.classList.remove("clicked");
		}
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
		document.body.addEventListener("click", (e) => {
			if (
				e.target.classList.contains("r-router-link") &&
				!(
					window.location.href === e.target.parentElement.href ||
					window.location.href ===
						e.target.parentElement.parentElement.href
				)
			) {
				Np.inc(0.5);
				let oldHref = window.location.href
				const interval = setInterval(() =>{
					let newHref = window.location.href
					if(oldHref !== newHref) {
						Np.done()
						clearInterval(interval)
					}
				}, 30)
			}
		});
		const libs = ["litcss", "cookiejs"];
		const displayProjects = ({ link, name }, idx) => {
			if (libs.includes(name.toLowerCase())) return;
			return (
				<li className="nav-item" key={idx}>
					{link.startsWith("http") ? (
						<a
							className="nav-link text-small pb-0 text-decoration-none"
							target="_blank"
							rel="noreferrer noopener"
							href={link}
						>
							{name}
						</a>
					) : (
						<Link className="text-decoration-none" to={link}>
							<span className="nav-link text-small pb-0 r-router-link">
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
					style={{ border: "none !important", cursor:'pointer' }}
					id="navbar-hamburger"
				>
					<Hamburger id="inner-nav-hamburger" />
				</button>
				<div id="navbarContent" className="collapse navbar-collapse">
					<Link to="/">
						<div
							id="home-logo"
							className="navbar-brand d-none d-lg-block"
						>
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
						<li className="nav-item dropdown megamenu nav-content">
							<button
								style={{
									background: "transparent",
									border: "none",
									outline: "none",
								}}
								id="project-megamenu"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
								className="nav-arrow nav-title nav-link"
							>
								<ChevronDown width={17} />
							</button>
							<div
								aria-labelledby="project-megamenu"
								className="dropdown-menu projects-dropdown border-0 p-0 m-0"
							>
								<div className="container ">
									<div
										id="navbar-row"
										className="row justify-content-center bg-white rounded m-0 custom-shadow"
									>
										<div className="col-12">
											<div className="p-4 nav-dropdown">
												<div className="row">
													<div className="col mb-4">
														<h6 className=" text-uppercase dropdown text-decoration-none">
															<Link
																to="/projects"
																className="text-decoration-none "
															>
																<span className="drop-item r-router-link">
																	Projects
																</span>
															</Link>
														</h6>
														<ul className="list-unstyled ml-lg-n2">
															{projects}
														</ul>
													</div>
													<div className="col mb-4 pt-4">
														<ul className="list-unstyled ml-lg-n2">
															{projects2}
														</ul>
													</div>

													<div className="col mb-4">
														<h6
															className="text-uppercase"
															style={{
																color:
																	"#007bff",
																cursor:
																	"default",
															}}
														>
															Libraries
														</h6>
														<ul className="list-unstyled">
															<li className="nav-item">
																<Link
																	to="/litcss"
																	className="text-decoration-none"
																>
																	<span className="nav-link text-small pb-0 r-router-link">
																		LitCSS
																	</span>
																</Link>
															</li>
															<li className="nav-item">
																<Link
																	to="/cookie-js"
																	className="text-decoration-none"
																>
																	<span className="nav-link text-small pb-0 r-router-link">
																		Cookie
																		JS
																	</span>
																</Link>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</li>
						<Link to="/litcss" style={{ textDecoration: "none" }}>
							<li className="nav-item nav-content nav-link nav-title text-uppercase fs-16 r-router-link">
								LitCSS
							</li>
						</Link>
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
