import React from "react";
import Home from "../../pages/Home";
import Designs from "../../pages/Designs";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ROUTES } from "../../routes/ROUTES";
import NotFound from "../../pages/NotFound";

const AnimatedRoutes = () => {
	const location = useLocation();

	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route path="" element={<Home />} />
				<Route path={ROUTES.home} element={<Home />} />
				<Route path={ROUTES.designs} element={<Designs />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</AnimatePresence>
	);
};

export default AnimatedRoutes;
