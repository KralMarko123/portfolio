import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MyRoutes from "./components/helper/MyRoutes";

const App = () => {
	return (
		<>
			<Router>
				<MyRoutes />
			</Router>
		</>
	);
};

export default App;
