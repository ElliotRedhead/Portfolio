import React, { useRef } from "react";
import "./../styles/projectlist.scss";
import projectData from "../ProjectData";
import ProjectSummary from "./ProjectSummary";


const ProjectList = () => {
	const projectlist = useRef<HTMLDivElement>(null);
	//   console.log(projectData.length); Can be used with breakpoint to determine total number of projects.

	return (
		<div
			id="projectList"
			className="container-fluid d-flex flex-column justify-content-center"
			ref={projectlist}>
			<div className="row">
				{projectData.map(
					({ id, name, shortDesc, technologies, repoLink, liveLink }) => {
						return(
							<ProjectSummary
								key={id}
								name={name}
								shortDesc={shortDesc}
								technologies={technologies}
								repoLink={repoLink}
								liveLink={liveLink}
							/>
						);
					}
				)}
			</div>
		</div>
	);
};

export default ProjectList;