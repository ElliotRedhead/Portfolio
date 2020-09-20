import React from "react";

const ProjectSummary = ({ name, shortDesc, technologies, repoLink, liveLink }) => {
  const technologyIcons = technologies.map((technology) => {
    const techImageSource = `/images/techicons/${technology.toLowerCase()}.png`;
    return <img src={techImageSource} />;
  });

  return (
    <>
      <div className="col-12 col-md-4">
        <div className="d-flex flex-column justify-content-around">
          <p>{name}</p>
          <p>{shortDesc}</p>
          {technologyIcons}
          <button><a target="_blank" rel="noopener noreferrer" href={repoLink}>Repo Link</a></button>
          <button><a target="_blank" rel="noopener noreferrer" href={liveLink}>Live Link</a></button>
        </div>
      </div>
    </>
  );
};


export default ProjectSummary;