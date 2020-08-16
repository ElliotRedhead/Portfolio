import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import pageNotFound404 from "./pages/PageNotFound404";
import UnderConstruction from "./pages/UnderConstruction";

const App = () => (
  <div>
    <Switch>
      <Route exact path={["/","/ReactPortfolio/"]} component={UnderConstruction} />
      <Route path={["/home"]} component={Homepage} />
      <Route component={pageNotFound404} />
    </Switch>
  </div>
);

export default App;