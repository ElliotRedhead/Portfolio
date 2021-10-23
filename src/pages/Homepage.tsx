import React from "react";
import CertificateList from "../components/CertificateList";
import Jumbotron from "../components/Jumbotron";
import LinksBanner from "../components/LinksBanner";
import ProjectList from "../components/ProjectList";
import "../styles/bootstrap.scss";

const Homepage = () => (
	<>
		<LinksBanner />
		<Jumbotron />
		<ProjectList />
		<CertificateList />
	</>
);

export { Homepage };
