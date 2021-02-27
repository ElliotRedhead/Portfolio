import React from "react";

type CertificateProps = {
	id: number,
	certName: string,
	shortDesc: string,
	certLink: string
}

const CertificateSummary = ({certName, certLink}: CertificateProps) => (
	<li className="my-2 certificateListItem d-flex justify-content-center">
		<a href={certLink} target="_blank" rel="noopener noreferrer">
			<button>
				{certName}
			</button>
		</a>
	</li>
);

export default CertificateSummary;