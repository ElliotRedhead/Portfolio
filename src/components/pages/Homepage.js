import React from "react";
import { Link } from "react-router-dom";
import NHLTeamShowdown from "../modals/NHLTeamShowdown";

const homePage = () => (
    <div className="jumbotron">
        <h1>Elliot Redhead | Web Developer</h1>
        <p></p>
        <Link to="404" className="">
        Learn More
        </Link>
        <Link to="NHLTeamShowdown">
			NHL Link
        </Link>
        <NHLTeamShowdown>
        </NHLTeamShowdown>
    </div>
);

export default homePage;