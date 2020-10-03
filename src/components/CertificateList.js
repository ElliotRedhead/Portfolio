import React from "react";
// import { ListGroup } from "react-bootstrap";
import certificateData from "../CertificateData";
import CertificateSummary from "./CertificateSummary";

const Certificates = () => {

  return(
    <div className="d-flex align-items-center" style={{minHeight: window.innerHeight, backgroundColor: "#E9ECEF"}}>
      {certificateData.map(
        ({ id, name, shortDesc, certLink }) => {
          return(
            <CertificateSummary
              key={id}
              name={name}
              shortDesc={shortDesc}
              certLink={certLink}
            />
          );
        }
      )}
    </div>
  );
};

export default Certificates;