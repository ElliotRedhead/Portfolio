import React, { useLayoutEffect, useRef } from "react";
import "../styles/global.scss";
import useTypewriter from "react-typewriter-hook";
import { useState } from "react";

const Homepage = () => {
  const titleText = "Elliot Redhead | Web Developer";
  const headingText = useTypewriter(titleText);

  const [cursorDisplay, setCursorDisplay] = useState("");

  const titleHeading = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const titleNode = titleHeading.current;
    if (titleNode && titleNode.innerHTML.startsWith(titleText)) {
      const interval = setInterval(() => {
        cursorDisplay === "" ? setCursorDisplay("_") : setCursorDisplay("");
      }, 700);
      return () => clearInterval(interval);
    }
  }, [headingText, cursorDisplay]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="jumbotron-fluid col-10 offset-1 col-md-12 offset-md-0 d-flex justify-content-center align-items-center">
          <h1 id="titleHeading" ref={titleHeading} className="text-center">
            {headingText}
            <span id="titleCursor">{cursorDisplay}</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
