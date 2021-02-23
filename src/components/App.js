import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Homepage } from "../pages/Homepage";
import pageNotFound404 from "../pages/PageNotFound404";
import DisplayContext from "../contexts/DisplayContext.tsx";



const App = () => {
	const [projectsVisibility, setProjectsVisibility] = useState(false);
	const toggleProjectsVisibility = () => {
		setProjectsVisibility(true);
	};
  
	return (
		<>
			<Switch>
				<Route path={["/", "/ReactPortfolio"]}>
					<DisplayContext.Provider value={{ projectsVisibility, toggleProjectsVisibility }}>
						<Homepage/>
					</DisplayContext.Provider>
				</Route> 
				<Route component={pageNotFound404} />
			</Switch>
		</>
	);
};

export default App;