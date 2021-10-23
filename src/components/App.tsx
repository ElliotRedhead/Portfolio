import React from "react";
import { Route, Switch } from "react-router-dom";
import { Homepage } from "../pages/Homepage";
import pageNotFound404 from "../pages/PageNotFound404";
import "../styles/global.scss";


const App = () => (
	<>
		<Switch>
			<Route path={["/", "/ReactPortfolio"]}>
				<Homepage />
			</Route> 
			<Route component={pageNotFound404} />
		</Switch>
	</>
);

export default App;
