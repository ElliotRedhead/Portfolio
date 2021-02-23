import React from "react";
import PropTypes from "prop-types";

const CertificateSummary = ({id:number, name:string, shortDesc:string, certLink:string}) => (
	<li className="my-2 certificateListItem d-flex justify-content-center">
		<a href={certLink} target="_blank" rel="noopener noreferrer">
			<button>
				{name}
			</button>
		</a>
	</li>
);

CertificateSummary.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	shortDesc: PropTypes.string,
	certLink: PropTypes.string
};

export default CertificateSummary;