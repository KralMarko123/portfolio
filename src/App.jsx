import React from "react";
import Home from "./pages/Home";
import Designs from "./pages/Designs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
	return (
		<>
			<Router>
				<Routes>
					<Route path="" element={<Home />} />
					<Route path="/designs" element={<Designs />} />
				</Routes>
			</Router>
		</>
	);
};

export default App;
