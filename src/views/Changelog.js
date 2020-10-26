import React, { useEffect, useState } from "react";
import data from "../data/changelog-data.json";
const Changelog = () => {
	const [changeLog, setChangelog] = useState();
	useEffect(() => {
		document.title = "Changelog";
		const cleanedData = data.slice().reverse();
		setChangelog(
			cleanedData.map((entry, idx) => {
				let entries = entry.completed.map((e, idx) => {
					return <li key={idx}>{e}</li>;
				});
				return (
					<Log
						key={idx}
						date={entry.date}
						version={entry.version}
						completed={entries}
					/>
				);
			})
		);
	}, []);
	return (
		<div className="container py-3">
			<h1 className='mt-4'>Changelog</h1>
			{changeLog}
		</div>
	);
};

export default Changelog;

const Log = (props) => {
	return (
		<>
			<div className="h3 mt-5 my-4">{props.date}</div>
			<div className="h5">{props.version}</div>
			<ul className="mb-4">{props.completed}</ul>
			<hr />
		</>
	);
};
