import React from "react";
import Home from "../../pages/Home";
import Designs from "../../pages/Designs";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../../routes/ROUTES";
import NotFound from "../../pages/NotFound";

const MyRoutes = () => {
	return (
		<Routes>
			<Route exact path="" element={<Home />} />
			<Route exact path={ROUTES.home} element={<Home />} />
			<Route exact path={ROUTES.designs} element={<Designs />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default MyRoutes;
