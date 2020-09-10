import React, { useContext } from "react";
import Jumbotron from "../components/Jumbotron";
import ProjectList from "../components/ProjectList";
import DisplayContext from "../contexts/DisplayContext";

const Homepage = () => {
  const context = useContext(DisplayContext);

  return (
    <>
      <Jumbotron />
      {context.projectsVisibility === false ? null : (
        <ProjectList />
      )}
    </>
  );
};

export {Homepage};
