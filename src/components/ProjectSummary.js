import React from "react";

const ProjectSummary = ({name, shortDesc, technologies, repoLink, liveLink}) => (
  <>
    <p>{name}</p>
    <p>{shortDesc}</p>
    <p>{technologies}</p>
    <p>{repoLink}</p>
    <p>{liveLink}</p>
  </>
);


export default ProjectSummary;