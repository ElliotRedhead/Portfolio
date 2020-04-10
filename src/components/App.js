import React from "react";
import { Route, Switch } from "react-router-dom";
import homePage from "./pages/Homepage";
import pageNotFound404 from "./pages/PageNotFound404";
import NHLTeamShowdown from "./modals/NHLTeamShowdown";

const App = () =>
		<div>
			<Switch>
				<Route exact path={["/", "/home", "/ReactPortfolio"]} component={homePage} />
				<Route path={["/NHLTeamShowdown"]} component={NHLTeamShowdown} />
				<Route component={pageNotFound404} />
			</Switch>
		</div>

export default App;