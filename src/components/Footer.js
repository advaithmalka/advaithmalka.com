import React from "react";
import InfinityLogo from "../assets/img/infinity.png";
import { Link } from "react-router-dom";
const Footer = () => (
	<>
		<footer id="footer" className='pt-4' style={{ backgroundColor: "black" }}>
			<div className="container pb-2">
				<div className="row">
					
					<div className="col-md text-center">
						<ul className="list-unstyled text-small">
							<Link to="/about" className="footer-link">
								<li className='r-router-link'>About</li>
							</Link>
						</ul>
					</div>

					<div className="col-md text-center">
						<ul className="list-unstyled text-small">
							<Link to="/changelog" className="footer-link">
								<li className='r-router-link'>Changelog</li>
							</Link>
						</ul>
					</div>
					<div className="col-md text-center">
						<ul className="list-unstyled text-small">
							<a rel='noopener noreferrer' target="_blank" href="https://github.com/AdvaithM26/advaithm26.github.io" className="footer-link">
								<li>Github repository</li>
							</a>
						</ul>
					</div>
					<div className="col-md text-center">
						<ul className="list-unstyled text-small">
							<a rel='noopener noreferrer' target="_blank" href="https://advaithm26.github.io/old-website/" className="footer-link">
								<li>Old website</li>
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
