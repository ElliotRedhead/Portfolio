import React from "react";

const LinksBanner = () => {
  return(
    <>
      <img src="/images/linkicons/github-square.svg" alt="GitHub link icon." style={{position: "absolute", right:"5rem", width:"50px", height: "70px", objectFit: "cover"}}/>
      <img src="/images/linkicons/cv-doc.svg" alt="CV download link icon" style={{position: "absolute", right:"10rem", width:"50px", height: "70px", objectFit:"cover"}}/>
    </>
  );
};

export default LinksBanner;