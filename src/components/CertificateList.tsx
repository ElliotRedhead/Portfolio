import certificateData from "../CertificateData";
import CertificateSummary from "./CertificateSummary";
import "../styles/certificates.scss";


const CertificateList = () => (
	<div
		className="container-fluid d-flex flex-column justify-content-center"
		style={{ minHeight: window.innerHeight, backgroundColor: "#E9ECEF" }}>
		<h1
			className="text-center"
			id="certificate-heading">
			Certification
		</h1>
		<div className="row">
			<div className="ol col-12">
				{certificateData.map(
					({ id, certName, certLink }) =>
						(
							<CertificateSummary
								key={id}
								id={id}
								certName={certName}
								certLink={certLink} />
						)
				)}
			</div>
		</div>
	</div>
);
export default CertificateList;
