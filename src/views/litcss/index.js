import React, { useEffect } from "react";
import $ from "jquery";
import "../../assets/css/hljs-custom.css";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import hljs from "highlight.js/lib/core";
import html from "highlight.js/lib/languages/xml";
import bash from "highlight.js/lib/languages/bash";
import "../../assets/css/library.css";
import LitLogo from "../../assets/img/litcss-logo.png";
import LinkIcon from "../../assets/img/link-icon.svg";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
const LitcssHome = () => {
	function copyText(target, copybtn) {
		$(copybtn).text("Copied");
		setTimeout(function () {
			$(copybtn).text("Copy");
		}, 2000);
	}

	$(".copy-btn").each(function () {
		var thisCodebox = `#codebox${$(this)
			.attr("id")
			.substr($(this).attr("id").indexOf("-"))}`;
		$(this).attr("data-clipboard-target", thisCodebox);
	});

	$("[id^=copy]").each(function () {
		var thisCodebox = `#codebox${$(this)
			.attr("id")
			.substr($(this).attr("id").indexOf("-"))}`;
		$(this).attr("data-clipboard-target", thisCodebox);
	});

	window.addEventListener("load", () => {
		$("#copy-download-litcss").on("click", function () {
			copyText("#codebox-download-litcss", this);
		});
		$("#copy-download-litjs").on("click", function () {
			copyText("#codebox-download-litjs", this);
		});
		$("#copy-litcss-cdn").on("click", function () {
			copyText("#codebox-litcss-cdn", this);
		});
		$("#copy-litjs-cdn").on("click", function () {
			copyText("#codebox-litjs-cdn", this);
		});
		$("#copy-litcss-npm").on("click", function () {
			copyText("#codebox-litcss-npm", this);
		});
	});
	useEffect(() => {
		hljs.registerLanguage("html", html);
		hljs.registerLanguage("bash", bash);
		document.querySelectorAll("pre code").forEach(block => {
			hljs.highlightBlock(block);
		});
		document.title = "LitCSS";
	});
	return (
		<>
			<Container>
				<div className="jumbotron darker-item light-black mt-4">
					<div className="row">
						<div className="col-8">
							<h1 className="display-4 mb-5">LitCSS</h1>
							<p className="lead wrap mb-4">
								A CSS utility library that makes your coding life just a little
								bit easier
							</p>
							<HashLink to="#download">
								<button className="btn btn-outline-primary btn-lg fs-25 mt-5 ml-xl-4 m-1">
									Download
								</button>
							</HashLink>

							<Link className="router-link" to="/litcss/docs">
								<button className="router-link btn btn-outline-primary fs-25 btn-lg mt-5 mr-xl-3 m-1">
									Docs
								</button>
							</Link>
						</div>
						<div className="col-4">
							<img
								className="float-right lib-img round"
								src={LitLogo}
								width="300"
								alt="lit css icon"
							/>
						</div>
					</div>
				</div>
			</Container>
			<Container className="mb-5" style={{ marginTop: 100 }}>
				<Card
					style={{
						boxShadow: "4px 10px 20px rgba(0, 0, 0, 0.1)",
						border: "none",
					}}
				>
					<Container className="mt-4">
						<h2 id="download">
							Github repo
							<HashLink to="#download">
								<img className="link-icon" src={LinkIcon} width="30" alt="" />
							</HashLink>
						</h2>
						<p className="fs-20">
							Download the latest version of LitCSS directly to your PC from
							github
						</p>

						<a
							href="https://github.com/advaithmalka/LitCSS"
							target="_blank"
							rel="noreferrer noopener"
							download
							className="btn btn-outline-primary mb-3 fs-18"
						>
							Download
						</a>

						<p>
							Then place this code in <code>&lt;head&gt;</code> of your document
						</p>

						<div className="codebox my-3 mb-4">
							<pre>
								<code id="codebox-download-litcss html">
									&lt;link rel="stylesheet" type="text/css"
									href="path/to/litcss/litcss/main/css/litcss.css"/&gt;
								</code>
							</pre>
						</div>

						<p>
							To use components that require litJS, place this code at the
							bottom of your HTML document
						</p>

						<div className="codebox my-3 mb-4">
							<pre>
								<code id="codebox-download-litjs">
									&lt;script
									src="path/to/litcss/litcss/main/js/litjs.js"&gt;&lt;/script&gt;
								</code>
							</pre>
						</div>
						<div className="note-primary mb-5">
							LitJS requires <a href="https://jquery.com/">jQuery</a> so make
							sure you include jQuery <strong>before</strong> LitJS
						</div>

						<h4 className="mt-3">JSdelivr CDN</h4>
						<p>
							Copy and paste this code somewhere in the{" "}
							<code>&lt;head&gt;</code> of your HTML document
						</p>

						<div className="codebox my-3 mb-4">
							<pre>
								<code id="codebox-litcss-cdn">
									&lt;link
									href="https://cdn.jsdelivr.net/npm/css-litcss/main/css/litcss.min.css"
									crossorigin="anonymous"/&gt;
								</code>
							</pre>
						</div>
						<h5>LitJS</h5>

						<div className="codebox my-3 mb-4">
							<pre>
								<code id="codebox-litjs-cdn">
									&lt;script
									src="https://cdn.jsdelivr.net/npm/css-litcss/main/js/litjs.min.js"&gt;&lt;/script&gt;
								</code>
							</pre>
						</div>

						<h4 className="mt-5">NPM</h4>
						<div className="codebox my-3">
							<pre>
								<code className="bash" id="codebox-litcss-npm">
									npm i css-litcss
								</code>
							</pre>
						</div>

						<h2 className="mt-5" id="github">
							Github
							<HashLink to="#github">
								<img
									className="link-icon"
									src={LinkIcon}
									width="30"
									alt="link icon"
								/>
							</HashLink>
						</h2>

						<p className="mb-5">
							Visit the{" "}
							<a
								className="doc-link"
								target="_blank"
								rel="noreferrer noopener"
								href="https://github.com/advaithmalka/LitCSS"
							>
								Github repository
							</a>{" "}
							for LitCSS
						</p>
					</Container>
				</Card>
			</Container>
		</>
	);
};

export default LitcssHome;
