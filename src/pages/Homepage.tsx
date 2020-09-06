import React from "react";
import Jumbotron from "../components/Jumbotron";
import ProjectList from "../components/ProjectList";


function scrollToSection(arg:any) {
  console.log(arg);
}


const Homepage = () => (
  <>
    <Jumbotron />
    <ProjectList />
  </>
);

export {Homepage, scrollToSection};
