import { Link } from "react-router-dom";

const PageNotFound404 = () => (
	<>
		<h1>
			It seems we&apos;re lost in the ether!
		</h1>
		<h2>
			<Link to="/">
				Back to safety!
			</Link>
		</h2>
	</>
);

export { PageNotFound404 };
