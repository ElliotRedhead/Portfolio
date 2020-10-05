import React from "react";
import certificateData from "../CertificateData";
import CertificateSummary from "./CertificateSummary";
import "../styles/main.scss";
import "../styles/certificates.scss";


const CertificateList = () => {

  return(
    <div id="certificateList"
      className="container-fluid d-flex flex-column justify-content-center" style={{minHeight: window.innerHeight, backgroundColor: "#E9ECEF"}}>
      <h1 className="text-center">Certificates</h1>
      <div className="row">
        <div className="col-12">
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