import React, {useState, Link} from "react";

const HiddenLink = () => {
  const [linkVisibility, switchLinkVisibility] = useState("hidden");
  return (
    <div
      onMouseOver={() => {switchLinkVisibility("visible");}}
      onMouseOut={() => {switchLinkVisibility("hidden");}}>
      <button
        style={{visibility:`${linkVisibility}`}}>
        <Link to={{pathname:"/home"}}>
				Home
        </Link>
      </button>
    </div>
  );
};

export default HiddenLink;