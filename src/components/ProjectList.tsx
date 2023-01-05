import "../styles/projectlist.scss";
import "react-tooltip/dist/react-tooltip.css";
import projectData from "../ProjectData";
import ProjectSummary from "./ProjectSummary";


const ProjectList = () => (
	<div
		id="project-list"
		className="container d-flex flex-column justify-content-center">
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

export default ProjectList;
