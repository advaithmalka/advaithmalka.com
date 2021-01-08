import React, { useEffect } from "react";
const Blog = () => {
	useEffect(() => {
		window.MediumWidget.Init({
			renderTo: "#blog-posts",
			params: {
				resource: "https://medium.com/@advaithmalka",
				postsPerLine: 1,
				limit: 10,
				picture: "big",
				fields: ["description", "author", "publishAt"],
				ratio: "landscape",
			},
		});
	});

	return (
		<>
			<div>This is the blog</div>
			<div id="blog-posts"></div>
		</>
	);
};

export default Blog;
