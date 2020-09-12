import React from "react";

const ProjectSummary = ({name, shortDesc, technologies, repoLink, liveLink}) => (
  <>
    <div className="col-12 col-md-4">
      <p>{name}</p>
      <p>{shortDesc}</p>
      <p>{technologies}</p>
      <p><a target="_blank" rel="noopener noreferrer" href={repoLink}>Repo Link</a></p>
      <p><a target="_blank" rel="noopener noreferrer" href={liveLink}>Live Link</a></p>
    </div>
  </>
);


export default ProjectSummary;