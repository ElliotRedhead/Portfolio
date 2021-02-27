import React, { useState } from "react";
import { Property } from "csstype";


/**
 * React Hooks are used to toggle visibility of this element, a conditional ternary operator determines what visibility to pass based on the current state.
 * @returns {object} The project preview object.
 */
const ProjectPreviewContainer=() => {
	const [containerVisibility, switchComponentVisibility] = useState<Property.Visibility>("hidden");

	return (
		<div
			onMouseOver={() => {
				switchComponentVisibility("visible");
			}}
			onMouseOut={() => {
				switchComponentVisibility("hidden");
			}}
		>
			<button style={{ visibility: containerVisibility }}>
        Only visible on parent element hover.
			</button>
		</div>
	);
};

export default ProjectPreviewContainer;
