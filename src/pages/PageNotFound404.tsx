import React from "react";
import { Link } from "react-router-dom";

const PageNotFound404 = () => (
	<>
		<h1>
			It seems we&apos;re lost in the ether!
		</h1>
		<h2>
			<Link to="/home">
				Back to safety!
			</Link>
		</h2>
	</>
);

export default PageNotFound404;
