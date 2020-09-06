import React from "react";
import ReactDOM from "react-dom";
import Jumbotron from "../components/Jumbotron";
import ProjectList from "../components/ProjectList";


function scrollToSection(arg:string) {
  console.log(titleReference.current);
}


const Homepage = () => (
  <>
    <Jumbotron />
    <ProjectList />
  </>
);

export {Homepage, scrollToSection};
