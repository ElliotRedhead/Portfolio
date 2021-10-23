import React, { useRef } from "react";
import "../styles/projectlist.scss";
import projectData from "../ProjectData";
import ProjectSummary from "./ProjectSummary";


const ProjectList = () => {
	const projectList = useRef<HTMLDivElement>(null);

	return (
		<div
			id="project-list"
			className="container d-flex flex-column justify-content-center"
			ref={projectList}>
			<div className="row">
				{projectData.map(
					({ id, name, shortDesc, technologies, repoLink, liveLink }) => (
						<ProjectSummary
							key={id}
							projectName={name}
							shortDesc={shortDesc}
							technologies={technologies}
							repoLink={repoLink}
							liveLink={liveLink} />
					)
				)}
			</div>
		</div>
	);
};

export default ProjectList;
