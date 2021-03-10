import React, { useContext } from "react";
import CertificateList from "../components/CertificateList";
import Jumbotron from "../components/Jumbotron";
import LinksBanner from "../components/LinksBanner";
import ProjectList from "../components/ProjectList";
import DisplayContext from "../contexts/DisplayContext";

const Homepage = () => {
	const context = useContext(DisplayContext);
	return (
		<>
			<LinksBanner />
			<Jumbotron />
			{context.projectsVisibility && (
				<>
					<ProjectList />
					<CertificateList />
				</>
			)}
		</>
	);
};

export { Homepage };
