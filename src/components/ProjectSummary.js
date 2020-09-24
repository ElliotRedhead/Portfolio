import React from "react";

const ProjectSummary = ({ name, shortDesc, technologies, repoLink, liveLink }) => {  
  const technologyIcons = technologies.map((technology) => {
    const slugify = (technology) => {
      technology = technology.replace(/ /g,"_").toLowerCase();
      return technology;
    };
    const techImageSource = `/images/techicons/${slugify(technology)}.svg`;
    const techImageAltText = `${technology} icon.`;
    return <img 
      data-toggle="tooltip"
      title={technology}
      src={techImageSource}
      className="col-2"
      key={technology}
      alt={techImageAltText}
      style={{width:"100%", height:"100%", objectFit:"contain"}}/>;
  });

  return (
    <>
      <div className="col-12 col-md-6 col-lg-4">
        <div className="d-flex flex-column justify-content-around" style={{minHeight:"100vh"}}>
          <p className="text-center">{name}</p>
          <p className="text-center">{shortDesc}</p>
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