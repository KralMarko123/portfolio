import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/ROUTES";
import "./NotFound.css";

const NotFound = () => {
	const navigate = useNavigate();

	return (
		<div className="notfound page">
			<span className="notfound__title" onClick={() => navigate(ROUTES.HOME)}>
				Looks like there isn't anything here. Click on me to go back to the homepage.
			</span>
		</div>
	);
};

export default NotFound;
