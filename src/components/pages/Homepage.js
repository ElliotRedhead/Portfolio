import React from "react";
import { Link } from "react-router-dom";
import ProjectPreviewContainer from "../modals/ProjectPreviewContainer";
import "../../styles/global.css";
import useTypewriter from "react-typewriter-hook";

const Homepage = () => {

  const headingText = useTypewriter("Elliot Redhead | Web Developer");

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="jumbotron col-12">
          <h1 className="cursor" id="titleHeading">{headingText}</h1>
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