import React from "react";
import InfinityLogo from "../assets/img/infinity.png";
import LinkedInLogo from "../assets/img/linkedin.svg";
import { Link } from "react-router-dom";
const Footer = () => (
	<>
		<footer
			id="footer"
			className="pt-4"
			style={{ backgroundColor: "black" }}
		>
			<div className="container-fluid pb-2" style={{ maxWidth: 1500 }}>
				<div className="row">
					<div className="col-md text-center">
						<ul className="list-unstyled text-small">
							<Link to="/about" className="footer-link">
								<li className="r-router-link">About</li>
							</Link>
						</ul>
					</div>

					<div className="col-md text-center">
						<ul className="list-unstyled text-small">
							<Link to="/changelog" className="footer-link">
								<li className="r-router-link">Changelog</li>
							</Link>
						</ul>
					</div>
					<div className="col-md text-center">
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
					<div className="col-md text-center">
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
					<div className="col-md text-center">
						<ul className="list-unstyled text-small">
							<a
								rel="noopener noreferrer"
								target="_blank"
								href="https://www.linkedin.com/in/advaith-malka-6a812a1bb/"
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
					<div className="col-md text-center">
						<p className="text-primary">
							© Advaith Malka 2020 -
							<img
								src={InfinityLogo}
								width={30}
								alt="infinity logo"
								className="svg-fill-primary"
							/>
						</p>
					</div>
				</div>
			</div>
		</footer>
	</>
);

export default Footer;
