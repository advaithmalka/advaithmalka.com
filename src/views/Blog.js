import React, { useEffect, useRef, useState } from "react";
const Blog = () => {
	const blogPostsRef = useRef();
	const [blogPosts, setBlogPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		(async function () {
			let data = await fetch(
				"https://medium-widget-api.pixelpoint.io/api/v1/articles?resource=https%3A%2F%2Fmedium.com%2F%40advaithmalka&limit=10"
			);
			data = await data.json();
			setBlogPosts(data);
			setLoading(false);
		})();
	}, []);
	function unixConverter(timestamp) {
		const a = new Date(timestamp);
		const months = [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		];
		const year = a.getFullYear();
		const month = months[a.getMonth()];
		const date = a.getDate();
		const time = `${month} ${date}, ${year}`;
		return time;
	}
	// TODO loading spinner
	return (
		<>
			<div className="container">
				<div className="max-w-3xl mx-auto">
					<h2 className="mt-8 mb-5">Advaith Malka's latest blog posts: </h2>
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
								return (
									<div key={idx} className="-mr-4 -ml-4 p-4">
										<div className="w-full mx-auto">
											<a href={post.url} target="_blank" rel="noreferrer">
												<img
													src={`https://cdn-images-1.medium.com/max/2000/${post.pictureId}`}
													className="w-full rounded"
													alt=""
												/>
											</a>
											<div className="mt-2">
												<a
													href={post.url}
													target="_blank"
													rel="noreferrer"
													className="text-2xl font-semibold text-gray-800 hover:no-underline hover:text-gray-500"
												>
													{post.title}
												</a>
												<div className="text-sm my-2 text-gray-600">
													{post.description}
												</div>
												<div className="flex flex-wrap mt-4">
													<a
														target="_blank"
														rel="noreferrer"
														href="https://advaithmalka.medium.com"
														className="flex items-center"
													>
														<img
															src={post.avatar}
															className="rounded-full"
															style={{ maxWidth: 30 }}
															alt=""
														/>
														<div className="text-gray-700 ml-2">
															Advaith Malka
														</div>
													</a>
													<div className="text-gray-500 flex text-sm ml-2 items-center leading-4">
														{unixConverter(post.publishAt)}
													</div>
												</div>
											</div>
										</div>
										<hr />
									</div>
								);
							})
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Blog;
