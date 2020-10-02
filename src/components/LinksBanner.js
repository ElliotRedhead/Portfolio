import React from "react";

const LinksBanner = () => {
  return(
    <>
      <img src="/images/linkicons/github-brands.svg" alt="GitHub link icon." style={{position: "absolute", top:"1rem", right:"6rem", width:"2.5rem", height: "2.5rem", objectFit: "contain"}}/>
      <img src="/images/linkicons/cv-doc.svg" alt="CV download link icon" style={{position: "absolute", top:"1rem", right:"2rem", width:"2.5rem", height: "2.5rem", objectFit:"contain"}}/>
    </>
  );
};

export default LinksBanner;