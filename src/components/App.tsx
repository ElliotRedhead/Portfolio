import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "../pages/Homepage";
import { PageNotFound404 } from "../pages/PageNotFound404";
import "../styles/global.scss";

const App = () => (
	<BrowserRouter>
		<Routes>
			{["/", "/ReactPortfolio"].map((path, index) => 
				<Route
					path={path}
					element={<Homepage />}
					key={index} />
			)}
			<Route element={<PageNotFound404 />} />
		</Routes>
	</BrowserRouter>
);

export default App;
