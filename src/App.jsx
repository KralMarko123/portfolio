import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/helper/AnimatedRoutes";
import ScrollToTop from "./components/helper/ScrollToTop";

const App = () => {
	return (
		<>
			<Router>
				<ScrollToTop />
				<AnimatedRoutes />
			</Router>
		</>
	);
};

export default App;
