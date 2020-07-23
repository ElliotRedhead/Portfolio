import React from "react";
import ReactGA from "react-ga";

const UnderConstruction = () => {
  ReactGA.initialize("G-2SBBFGDL16");
  ReactGA.pageview("/underconstruction");
  return (
    <div>
      <h1>This portfolio site is currently under construction.</h1>
      <p>This is only temporary, but in the meantime: you can review my existing projects on my <a href="https://github.com/ElliotRedhead">GitHub profile</a>.</p>
    </div>
  );
};

export default UnderConstruction;
