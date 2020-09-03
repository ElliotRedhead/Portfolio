import React, { useLayoutEffect, useRef } from "react";
import "./../styles/jumbotron.scss";
import useTypewriter from "react-typewriter-hook";
import { useState } from "react";

const Jumbotron = () => {
  const titleText = "Elliot Redhead";
  const animatedHeading = useTypewriter(titleText);

  const [cursorDisplay, setCursorDisplay] = useState("_");

  const titleReference = useRef<HTMLDivElement>(null);
  let additionalSubtitleClasses = useRef("invisible");
  let additionalContainerClasses = useRef("");

  useLayoutEffect(() => {
    const titleNode = titleReference.current;
    additionalSubtitleClasses.current = "invisible";
    if (titleNode && titleNode.innerHTML.startsWith(titleText)) {
      additionalSubtitleClasses.current = "fadeIn";
      additionalContainerClasses.current = "translateHeader";
      const interval = setInterval(() => {
        cursorDisplay === "" ? setCursorDisplay("_") : setCursorDisplay("");
      }, 700);
      return () => clearInterval(interval);
    }
  }, [animatedHeading, cursorDisplay]);

  return (
    <div className="jumbotron d-flex align-items-center">
      <div className={`container-fluid ${additionalContainerClasses.current}`}>
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
              className={`text-center ${additionalSubtitleClasses.current}`}
            >
              Web Developer
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
