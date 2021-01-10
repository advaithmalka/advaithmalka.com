import React from "react";
import ChevronDown from "./svg/chevron-down";
import { Link } from "react-router-dom";

const Dropdown = ({ projects, projects2 }) => {
	return (
		<li className="nav-item dropdown megamenu nav-content ">
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
				aria-labelledby="project-megamenu "
				className="dropdown-menu projects-dropdown border-0 absolute -left-96"
				style={{
					margin: "5px 0px",
					padding: 0,
					width: "100vw !important",
				}}
			>
				<div className="container-fluid w-100">
					<div
						id="navbar-row"
						className="row justify-content-center bg-white rounded m-0 custom-shadow"
					>
						<div className="col-12">
							<div className="p-5 nav-dropdown">
								<div className="row">
									<div className="col mb-6 -ml-4 lg:ml-0">
										<h6 className=" text-uppercase dropdown text-decoration-none">
											<Link to="/projects" className="text-decoration-none ">
												<span className="drop-item router-link">Projects</span>
											</Link>
										</h6>
										<ul className="list-unstyled ml-2 lg:ml-0">{projects}</ul>
									</div>
									<div className="col mb-6 pt-6">
										<ul className="list-unstyled">{projects2}</ul>
									</div>

									<div className="col mb-6 -ml-4 lg:ml-0">
										<h6
											className="text-uppercase"
											style={{
												color: "#007bff",
												cursor: "default",
											}}
										>
											Libraries
										</h6>
										<ul className="list-unstyled ml-2 lg:ml-0">
											<li className="nav-item">
												<Link to="/litcss" className="text-decoration-none">
													<span
														className="nav-link text-small router-link"
														style={{ paddingBottom: 0 }}
													>
														LitCSS
													</span>
												</Link>
											</li>
											<li className="nav-item">
												<Link to="/cookie-js" className="text-decoration-none">
													<span
														className="nav-link text-small router-link"
														style={{ paddingBottom: 0 }}
													>
														Cookie JS
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
	);
};

export default Dropdown;
