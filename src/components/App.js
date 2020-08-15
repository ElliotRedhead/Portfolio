import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import pageNotFound404 from "./pages/PageNotFound404";
import NHLTeamShowdown from "./modals/NHLTeamShowdown";
import UnderConstruction from "./pages/UnderConstruction";

const App = () => (
  <div>
    <Switch>
      <Route exact path={["/","/ReactPortfolio/"]} component={UnderConstruction} />
      <Route exact path={["/home"]} component={Homepage} />
      <Route path={["/NHLTeamShowdown"]} component={NHLTeamShowdown} />
      <Route component={pageNotFound404} />
    </Switch>
  </div>
);

export default App;