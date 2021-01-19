import React from "react";
import InfinityLogo from "../assets/img/infinity.png";
import LinkedInLogo from "../assets/img/linkedin.svg";
import { Link } from "react-router-dom";
const Footer = () => (
	<>
		<footer id="footer" className="pt-6" style={{ backgroundColor: "black" }}>
			<div className="container-fluid ">
				<div className="flex flex-wrap">
					<div className="flex-auto flex justify-center w-full md:flex-auto md:w-min">
						<ul className="list-unstyled text-small">
							<Link to="/about" className="footer-link">
								<li className="router-link">About</li>
							</Link>
						</ul>
					</div>

					<div className="flex-auto flex justify-center">
						<ul className="list-unstyled text-small">
							<Link to="/changelog" className="footer-link">
								<li className="router-link">Changelog</li>
							</Link>
						</ul>
					</div>
					<div className="flex-auto flex justify-center w-full  md:flex-auto md:w-min">
						<ul className="list-unstyled text-small">
							<a
								rel="noopener noreferrer"
								target="_blank"
								href="https://github.com/advaithmalka/advaithmalka.github.io"
								className="footer-link"
							>
								<li>Github repository</li>
							</a>
						</ul>
					</div>
					<div className="flex-auto flex justify-center w-full  md:flex-auto md:w-min">
						<ul className="list-unstyled text-small">
							<a
								rel="noopener noreferrer"
								target="_blank"
								href="https://advaithmalka.github.io/old-website/"
								className="footer-link"
							>
								<li>Old website</li>
							</a>
						</ul>
					</div>
					<div className="flex-auto flex justify-center w-full  md:flex-auto md:w-min">
						<ul className="list-unstyled text-small">
							<a
								rel="noopener noreferrer"
								target="_blank"
								href="https://www.linkedin.com/in/advaithmalka/"
								className="footer-link"
							>
								<img
									src={LinkedInLogo}
									width={35}
									alt="view my linked in profile"
								/>
							</a>
						</ul>
					</div>
					<div className="w-full lg:flex-auto lg:w-min flex justify-center">
						<p className="text-primary">
							© Advaith Malka 2020 -
							<img
								src={InfinityLogo}
								width={30}
								alt="infinity logo"
								className="svg-fill-primary inline"
							/>
						</p>
					</div>
				</div>
			</div>
		</footer>
	</>
);

export default Footer;
