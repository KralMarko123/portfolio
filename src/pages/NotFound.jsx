import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes/ROUTES";
import "../styles/pages/NotFound.css";

const NotFound = () => {
	let navigate = useNavigate();

	return (
		<div className="notfound page">
			<span className="notfound__title" onClick={() => navigate(ROUTES.home)}>
				Looks like there isn't anything here. Click on me to go back to the homepage.
			</span>
		</div>
	);
};

export default NotFound;
