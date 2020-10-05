import React from "react";

const CertificateSummary = ({id, name, shortDesc, certLink}) => {
  return (
    <li><a href={certLink} target="_blank" rel="noopener noreferrer">{name}</a></li>
  );
};

export default CertificateSummary;