import { Fragment } from "react";
import { Tooltip } from "react-tooltip";

type ProjectSummaryProps = {
	projectName: string,
	shortDesc?: string,
	technologies: string[],
	repoLink: string,
	liveLink: string
}

const ProjectSummary = ({ projectName, shortDesc, technologies, repoLink, liveLink }:ProjectSummaryProps) => {

	const technologyIcons = technologies.map(technology => {
		const slugify = (technology:string) => {
			technology = technology.replace(/ /g, "_").toLowerCase();
			return technology;
		};
		const techImageSource = `/images/techicons/${slugify(technology)}.svg`;
		const techImageAltText = `${technology} icon.`;
		return (
			<Fragment key={technology}>
				<Tooltip
					anchorId={`${projectName}-${technology}`}
					content={technology}
					place="top" />
				<img 
					id={`${projectName}-${technology}`} 
					data-tooltip-content={technology}
					src={techImageSource}
					className="tech-icon d-flex"
					key={technology}
					alt={techImageAltText} />
			</Fragment>
		);
	});

	return (
		<div className="col-12 col-md-6 col-lg-4">
			<div
				className="d-flex flex-column justify-content-center mx-2"
				style={{ height: window.innerHeight }}>
				<h2 className="text-center project-name">
					{projectName}
				</h2>
				<p
					className="text-center project-short-description">
					{shortDesc}
				</p>
				<div className="d-flex justify-content-evenly align-items-center flex-wrap icons-container">
					{technologyIcons}
				</div>
				<div className="d-flex flex-column justify-content-evenly">
					<a
						className="my-2"
						target="_blank"
						rel="noopener noreferrer"
						href={repoLink}>
						<button
							className="project-link-button"
							data-toggle="tooltip"
							title={`${projectName} GitHub`}>
							GitHub Repository
						</button>
					</a>
					{liveLink !== "#" &&
					<a
						className="mt-1"
						target="_blank"
						rel="noopener noreferrer"
						href={liveLink === "#" ? "" : liveLink}>
						<button
							className="project-link-button"
							data-toggle="tooltip"
							title={`${projectName} Live Deployment`}>
							{liveLink === "#" ? "To Be Deployed" : "Live Deployment"}
						</button>
					</a>}
				</div>
			</div>
		</div>
	);
};


export default ProjectSummary;
