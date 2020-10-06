import React from "react";

const CertificateSummary = ({id, name, shortDesc, certLink}) => {
  return (
    <li className="my-2 certificateListItem d-flex justify-content-center">
      <a href={certLink} target="_blank" rel="noopener noreferrer">
        <button>
          {name}
        </button>
      </a>
    </li>
  );
};

export default CertificateSummary;