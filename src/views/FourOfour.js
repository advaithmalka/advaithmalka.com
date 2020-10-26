import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const FourOfour = () => {
	useEffect(() =>{
		document.title = '404!'
	})
	return (
		<>
			<div className="container text-center my-5">
				<h1 className="text-center">
					Whoops, looks like you got lost like this guy
				</h1>
				<img
					src="https://dunbarumc.com/wp-content/uploads/2019/09/lost_png_818275.jpg"
					alt="404 guy"
					width={400}
				/>
				<h2 className="text-center">Lets get you back on track</h2>
				<Link to="/">
					<button className="gradient-btn-blue gradient-btn-lg ms-auto mt-3">
						Home
					</button>
				</Link>
			</div>
			);
		</>
	);
};

export default FourOfour;
