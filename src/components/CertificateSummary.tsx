type CertificateProps = {
	id?: number,
	certName: string,
	shortDesc?: string,
	certLink: string
}

const CertificateSummary = ({ certName, certLink }: CertificateProps) => (
	<li className="my-2 certificate-list-item d-flex justify-content-center">
		<a
			href={certLink}
			target="_blank"
			rel="noopener noreferrer">
			<button>
				{certName}
			</button>
		</a>
	</li>
);

export default CertificateSummary;
