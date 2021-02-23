import React from "react";

const LinksBanner = () => {
	return(
		<>
			<a href="http://www.github.com/elliotredhead" target="_blank" rel="noopener noreferrer">
				<img src="/images/linkicons/github-brands.svg" alt="GitHub link icon." style={{position: "absolute", top:"1rem", right:"6rem", width:"2.5rem", height: "2.5rem", objectFit: "contain"}}/>
			</a>
			<a href="https://elliot-portfolio.s3.eu-west-2.amazonaws.com/Elliot_Redhead_CV.pdf" target="_blank" rel="noopener noreferrer">
				<img src="/images/linkicons/cv-doc.svg" alt="CV download link icon" style={{position: "absolute", top:"1rem", right:"2rem", width:"2.5rem", height: "2.5rem", objectFit:"contain"}}/>
			</a>
		</>
	);
};

export default LinksBanner;