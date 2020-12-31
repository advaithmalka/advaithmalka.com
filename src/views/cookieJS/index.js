import React, { useEffect } from "react";
import "../../assets/css/hljs-custom.css";
import hljs from "highlight.js/lib/core";
import html from "highlight.js/lib/languages/xml";
import bash from "highlight.js/lib/languages/bash";
import "../../assets/css/library.css";
import cookieJSLogo from "../../assets/img/cookie.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const CookieJSHome = () => {
	useEffect(() => {
		hljs.registerLanguage("html", html);
		hljs.registerLanguage("bash", bash);
		document.querySelectorAll("pre code").forEach((block) => {
			hljs.highlightBlock(block);
		});
		document.title = "Cookie JS";
	});
	return (
		<div>
			<div className="container">
				<div className="jumbotron darker-item light-black mt-4">
					<div className="row">
						<div className="col-8">
							<h1 className="display-4 mb-5">Cookie JS</h1>
							<p className="lead wrap mb-4">
								A JavaScript library which easily lets anyone,
								with or without knowledge of online cookies,
								create, delete, and manage cookies for your new
								website
							</p>
							<HashLink to="#download">
								<button className="btn btn-outline-primary btn-lg fs-25 mt-5 ml-xl-4 m-1">
									Download
								</button>
							</HashLink>
							<Link to="/cookie-js/docs">
								<button className="r-router-link btn btn-outline-primary fs-25 btn-lg mt-5 mr-xl-3 m-1">
									Docs
								</button>
							</Link>
						</div>
						<div className="col-4">
							<img
								className="float-right lib-img round"
								src={cookieJSLogo}
								width={300}
								alt="cookie js logo"
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="container mb-5" style={{ marginTop: "100px" }}>
				<div className="card card-dark">
					<div className="container mt-4">
						<h2 id="download">Download</h2>
						<p className="fs-20">
							Download the latest version of Cookie JS from the
							Github repository
						</p>
						<a
							href="https://github.com/advaithmalka/Cookie-JS"
							className="btn btn-outline-primary mb-3 fs-18"
							target="_blank"
							rel="noreferrer noopener"
						>
							Download
						</a>
						<p>
							Then paste this code at the bottom of your HTML
							document
						</p>
						<div className="codebox my-3 mb-4">
							<pre>
								<code id="codebox-local">
									&lt;script
									src="path/to/cookie-js/cookie-js/main/cookie.js"&gt;&lt;/script&gt;
								</code>
							</pre>
						</div>
						<h4 className="mt-3">JSdelivr CDN</h4>
						<p>
							Copy and paste this code somewhere at the end of
							your HTML document
						</p>
						<div className="codebox my-3 mb-4">
							<pre>
								<code id="codebox-cookie-cdn">
									&lt;script
									src="https://cdn.jsdelivr.net/npm/web-cookies-js/main/cookie.min.js"
									crossorigin="anonymous"&gt;&lt;/script&gt;
								</code>
							</pre>
						</div>
						<h4>NPM package manager</h4>
						<div className="codebox my-3">
							<pre>
								<code id="codebox-cookie-npm">
									npm i web-cookies-js
								</code>
							</pre>
						</div>
						<h2 className="mt-4" id="github">
							Github
							<a href="#github" data-offset={300}>
								<img
									className="link-icon"
									src="icons/link.png"
									width={30}
									alt=""
								/>
							</a>
						</h2>
						<p className="mb-5">
							Visit the{" "}
							<a
								className="doc-link"
								target="_blank"
								rel="noreferrer noopener"
								href="https://github.com/advaithmalka/Cookie-JS"
							>
								Github repository{" "}
							</a>
							for Cookie JS
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CookieJSHome;
