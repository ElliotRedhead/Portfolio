import React, { useContext, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import ProjectList from "../components/ProjectList";
import DisplayContext from "../contexts/DisplayContext";

const Homepage = () => {
  const context = useContext(DisplayContext);

  useEffect(() => {
    console.log("Context has mounted.");
    if (context.projectsVisibility === true){
      console.log("Context has been updated to true.");
      window.scrollTo({ top:window.innerHeight, behavior:"smooth" });
    }
  }, [context.projectsVisibility]);

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
