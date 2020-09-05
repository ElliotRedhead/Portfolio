import React from "react";
import Jumbotron from "../components/Jumbotron";

function scrollToSection(arg:string) {
  alert(arg);
}


const Homepage = () => (
  <Jumbotron />
);

export {Homepage, scrollToSection};
