import React from "react";
import certificateData from "../CertificateData";
import CertificateSummary from "./CertificateSummary";
import "../styles/certificates.scss";


const CertificateList = () => {

  return(
    <div className="container-fluid d-flex flex-column justify-content-center" style={{minHeight: window.innerHeight, backgroundColor: "#E9ECEF"}}>
      <h1 className="text-center" id="certificateHeading">Certification</h1>
      <div className="row">
        <div className="ol col-12">
          {certificateData.map(
            ({ id, name, certLink }) => {
              return(
                <CertificateSummary
                  key={id}
                  name={name}
                  certLink={certLink}
                />
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificateList;