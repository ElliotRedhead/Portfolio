import React, {useEffect, useState, useRef} from "react";
import { Link } from "react-router-dom";
import ProjectPreviewContainer from "../modals/ProjectPreviewContainer";
import "../../styles/global.css";
import useTypewriter from "react-typewriter-hook";

const Homepage = () => {


  const headingText = useTypewriter("Elliot Redhead | Web Developer");

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log("This will run every second!");
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, [loading]);

  const headingTitle = useRef(null);

  useEffect(() => {
    if(headingTitle.current.innerHTML === "Elliot Redhead | Web Developer"){
      console.log("rendering is complete");
    }
  });

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="jumbotron col-12">
          <h1 className="cursor" id="titleHeading" ref={headingTitle}>{headingText}</h1>
          <p></p>
          <Link to="404" className="">
        Learn More
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <ProjectPreviewContainer/>
        </div>
      </div>
    </div>
  );
};

export default Homepage;