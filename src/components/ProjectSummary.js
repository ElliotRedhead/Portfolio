import React from "react";

const ProjectSummary = ({ name, shortDesc, technologies, repoLink, liveLink }) => {
  const technologyIcons = technologies.map((technology) => {
    const slugify = (technology) => {
      technology = technology.replace(/ /g,"_").toLowerCase();
      return technology;
    };
    const techImageSource = `/images/techicons/${slugify(technology)}.svg`;
    const techImageAltText = `${technology} icon.`;
    return <img src={techImageSource} key={technology} alt={techImageAltText} style={{width:"50px", height:"50px"}}/>;
  });

  return (
    <>
      <div className="col-12 col-md-4">
        <div className="d-flex flex-column justify-content-around">
          <p>{name}</p>
          <p>{shortDesc}</p>
          <div className="d-flex justify-content-around">
            {technologyIcons}
          </div>
          <button><a target="_blank" rel="noopener noreferrer" href={repoLink}>Repo Link</a></button>
          <button><a target="_blank" rel="noopener noreferrer" href={liveLink}>Live Link</a></button>
        </div>
      </div>
    </>
  );
};


export default ProjectSummary;