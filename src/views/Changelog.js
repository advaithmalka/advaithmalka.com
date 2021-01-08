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
		<div className="container py-5 ">
			<h1 className="mt-6">Changelog</h1>
			{changeLog}
		</div>
	);
};

export default Changelog;

const Log = props => {
	return (
		<>
			<div className="h3 mt-10">{props.date}</div>
			<div className="h5 mt-5">{props.version}</div>
			<ul className="mb-4 leading-7">{props.completed}</ul>
			<hr />
		</>
	);
};
