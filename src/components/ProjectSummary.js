import React from "react";
import ReactTooltip from "react-tooltip";



const ProjectSummary = ({ name, shortDesc, technologies, repoLink, liveLink }) => { 
  


  const technologyIcons = technologies.map((technology) => {
    const slugify = (technology) => {
      technology = technology.replace(/ /g,"_").toLowerCase();
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
          style={{objectFit:"contain"}}/>
      </React.Fragment>
    );
  });

  return (
    <>
      <div className="col-12 col-md-6 col-lg-4">
        <div className="d-flex flex-column justify-content-center" style={{minHeight:window.innerHeight}}>
          <h2 className="text-center projectName">{name}</h2>
          <p className="text-center projectShortDescription">{shortDesc}</p>
          <div className="row d-flex justify-content-center iconsContainer">
            {technologyIcons}
          </div>
          <button data-toggle="tooltip" title="test"><a target="_blank" rel="noopener noreferrer" href={repoLink}>Repo Link</a></button>
          <button><a target="_blank" rel="noopener noreferrer" href={liveLink}>Live Link</a></button>
        </div>
      </div>
    </>
  );
};


export default ProjectSummary;