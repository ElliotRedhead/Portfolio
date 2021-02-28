import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Property } from "csstype";

const HiddenLink = () => {
	const [linkVisibility, switchLinkVisibility] = useState<Property.Visibility>("hidden");
	return (
		<div
			onMouseOver={() => {switchLinkVisibility("visible");}}
			onMouseOut={() => {switchLinkVisibility("hidden");}}>
			<button
				style={{visibility:linkVisibility}}>
				<Link to={{pathname:"/home"}}>
				Home
				</Link>
			</button>
		</div>
	);
};

export default HiddenLink;