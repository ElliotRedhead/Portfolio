import React, {useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import ProjectPreviewContainer from "../modals/ProjectPreviewContainer";
import "../../styles/global.css";
import useTypewriter from "react-typewriter-hook";
import { useState } from "react";

const Homepage = () => {

  const titleText = "Elliot Redhead | Web Developer";
  const headingText = useTypewriter(titleText);

  const [cursorDisplay, setCursorDisplay] = useState("");

  let blinkPreviouslyFired = false;
  const titleHeading = useRef(null);
  // const titleHeading = useRef(blinkPreviouslyFired);

  const titleCursorBlink = () => {
    setInterval(() => {
      console.log("Blink fired");
      cursorDisplay === "" ? setCursorDisplay("_") : setCursorDisplay("");
    }, 500);
  };


  useEffect(() => {
    if(titleHeading.current.innerHTML.startsWith(titleText) && !blinkPreviouslyFired){
      // blinkPreviouslyFired = true;
      titleCursorBlink();
    }
  });

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="jumbotron col-12 mx-auto text-center">
          <h1 id="titleHeading" ref={titleHeading}>{headingText}<span>{cursorDisplay}</span></h1>
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