import { Certificate } from "crypto";
import React from "react";

const CertificateSummary = ({id, name, shortDesc, certLink}) => {
  console.log(name);
  return (
    <li>{name}</li>
  );
};

export default CertificateSummary;