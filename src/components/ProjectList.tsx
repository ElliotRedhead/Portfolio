import React, { useRef } from "react";
import "./../styles/projectlist.scss";


const ProjectList = () => {
  const projectlist = useRef<HTMLDivElement>(null);
  return (
    <div
      id="projectlist"
      className="container-fluid">
          ref={projectlist}
      <p>test</p>
    </div>
  );
};

export default ProjectList;