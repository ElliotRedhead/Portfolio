import React from "react";
import ReactTooltip from "react-tooltip";

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
			<React.Fragment key={technology}>
				<ReactTooltip />
				<img 
					data-tip={technology}
					src={techImageSource}
					className="col-2"
					key={technology}
					alt={techImageAltText}
					style={{ objectFit: "contain" }} />
			</React.Fragment>
		);
	});

	return (
		<>
			<div className="col-12 col-md-6 col-lg-4">
				<div
					className="d-flex flex-column justify-content-center"
					style={{ minHeight: window.innerHeight, padding: "0 1rem" }}>
					<h2 className="text-center projectName">
						{projectName}
					</h2>
					<p
						className="text-center projectShortDescription"
						style={{ minHeight: "5rem" }}>
						{shortDesc}
					</p>
					<div className="row d-flex justify-content-center iconsContainer">
						{technologyIcons}
					</div>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href={repoLink}>
						<button
							className="my-1 projectLinkButton"
							data-toggle="tooltip"
							title={`${projectName} GitHub`}>
							GitHub Repository
						</button>
					</a>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href={liveLink === "#" ? "" : liveLink}>
						<button
							className="my-1 projectLinkButton"
							data-toggle="tooltip"
							title={`${projectName} Live Deployment`}>
							{liveLink === "#" ? "To Be Deployed" : "Live Website"}
						</button>
					</a>
				</div>
			</div>
		</>
	);
};


export default ProjectSummary;
