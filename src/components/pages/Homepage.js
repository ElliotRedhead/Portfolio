import React, {useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import ProjectPreviewContainer from "../modals/ProjectPreviewContainer";
import "../../styles/global.css";
import useTypewriter from "react-typewriter-hook";

const Homepage = () => {

  const noCursorTitle = "Elliot Redhead | Web Developer";
  let headingText = useTypewriter("Elliot Redhead | Web Developer");




  const titleHeading = useRef(null);

  const titleCursorBlink = () => {
    setInterval(() => {
      const cursorTitle = "Elliot Redhead | Web Developer_";
      titleHeading.current.innerHTML == noCursorTitle ?
        titleHeading.current.innerHTML = cursorTitle :
        titleHeading.current.innerHTML = noCursorTitle;
    }, 800);
  };

  useEffect(() => {
    if(titleHeading.current.innerHTML === noCursorTitle){
      titleCursorBlink();
    }
  });

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="jumbotron col-12">
          <h1 id="titleHeading" ref={titleHeading}>{headingText}</h1>
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