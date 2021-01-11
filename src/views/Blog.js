import React, { useEffect, useRef, useState } from "react";
import BlogPost from "../components/BlogPost";
import BlogBackdrop from "../assets/img/blog.png";
import { onScroll } from "../util/onScroll";
const Blog = () => {
	const blogPostsRef = useRef();
	const blogRef = useRef();
	const [blogPosts, setBlogPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		document.title = "Blog";
		window.addEventListener("scroll", () => onScroll(blogRef));
		(async function () {
			let data = await fetch(
				"https://medium-widget-api.pixelpoint.io/api/v1/articles?resource=https%3A%2F%2Fmedium.com%2F%40advaithmalka&limit=10"
			);
			data = await data.json();
			setBlogPosts(data);
			setLoading(false);

			return () =>
				window.removeEventListener("scroll", () => onScroll(blogRef));
		})();
	}, []);
	const styles = {
		height: 370,
		backgroundColor: "#071F3D",
		backgroundImage: `url(${BlogBackdrop})`,
		backgroundSize: "cover",
		backgroundPosition: `0px ${Math.round(window.scrollY * -0.65) - 0}px`,
	};

	return (
		<>
			<div
				ref={blogRef}
				className="container-fluid text-center text-white flex items-center"
				style={styles}
			>
				<div className="mx-auto">
					<h1 className="text-7xl my-6">Blog</h1>
					<p className="lead">Advaith Malka's latest blog posts</p>
				</div>
			</div>
			<div className="container px-6">
				<div className="max-w-3xl mx-auto">
					<div ref={blogPostsRef} className="my-7" id="blog-posts">
						{loading ? (
							<div
								className="flex items-center justify-center"
								style={{ height: "70vh" }}
							>
								<div className="lit-spinner-big"></div>
							</div>
						) : (
							blogPosts.map((post, idx) => {
								return <BlogPost key={idx} post={post} />;
							})
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Blog;
