import React from "react";

const BlogPost = ({ post }) => {
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
	return (
		<div className="-mr-4 -ml-4  rounded-b-lg custom-shadow mb-8">
			<div className="w-full mx-auto ">
				<a href={post.url} target="_blank" rel="noreferrer">
					<img
						src={`https://cdn-images-1.medium.com/max/2000/${post.pictureId}`}
						className="w-full rounded-t-lg"
						alt=""
					/>
				</a>
				<div className="mt-2 px-4 lg:px-5 pb-5  pt-2 lg:pt-4  ">
					<a
						href={post.url}
						target="_blank"
						rel="noreferrer"
						className="text-2xl font-medium text-gray-800 hover:no-underline hover:text-gray-500"
					>
						{post.title}
					</a>
					<div className="text-sm my-2 f-nunito text-gray-600">
						{post.description}
					</div>
					<a
						href={post.url}
						target="_blank"
						rel="noreferrer"
						className="hidden md:block float-right lit-btn"
					>
						Read story
					</a>
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
							<div className="text-gray-700 ml-2">Advaith Malka</div>
						</a>
						<div className="text-gray-500 flex text-sm ml-2 items-center leading-4">
							{unixConverter(post.publishAt)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogPost;
