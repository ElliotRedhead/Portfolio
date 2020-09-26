import React, { useLayoutEffect, useRef, useContext, useState } from "react";
import useTypewriter from "react-typewriter-hook";
import DisplayContext from "../contexts/DisplayContext";
import "./../styles/jumbotron.scss";


const Jumbotron = () => {

  const titleText = "Elliot Redhead";
  const animatedHeading = useTypewriter(titleText);

  const [cursorDisplay, setCursorDisplay] = useState("_");

  const titleReference = useRef<HTMLDivElement>(null);
  let additionalSubheadingClasses = useRef("invisible");
  let additionalButtonClasses = useRef("");

  const context = useContext(DisplayContext);


  const projectsClickHandler = () => {
    context.toggleProjectsVisibility();
    setTimeout(function(){
      window.scrollTo({ top:window.innerHeight, behavior:"smooth" });},
    200);
  };

  useLayoutEffect(() => {
    const titleNode = titleReference.current;
    additionalSubheadingClasses.current = "invisible";
    additionalButtonClasses.current = "invisible";

    if (titleNode && titleNode.innerHTML.startsWith(titleText)) {
      additionalSubheadingClasses.current = "subheadingFade";
      const buttonAnimationDelay = () => {
        additionalButtonClasses.current = "";
      };
      setTimeout(function () {
        buttonAnimationDelay();
      }, 2500);
      const interval = setInterval(() => {
        cursorDisplay === "" ? setCursorDisplay("_") : setCursorDisplay("");
      }, 700);
      return () => clearInterval(interval);
    }
  }, [animatedHeading, cursorDisplay]);


  return (
    <div className="jumbotron d-flex align-items-center" style={{height: window.innerHeight}}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h1
              id="titleHeading"
              ref={titleReference}
              className="text-center mb-3"
            >
              {animatedHeading}
              <span id="titleCursor">{cursorDisplay}</span>
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h2
              id="subHeading"
              className={`text-center ${additionalSubheadingClasses.current}`}
            >
              Web Developer
            </h2>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 text-center">
            <button className={`btn-light jumbotronNavigationButton ${additionalButtonClasses.current}`}
              onClick={projectsClickHandler}
            >
              Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
