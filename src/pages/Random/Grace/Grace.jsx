import React, { useState } from "react";
import dancingSkeleton from "../../../assets/gifs/dancing skeleton.gif";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/ROUTES";
import ConfettiExplosion from "react-confetti-explosion";
import "./Grace.css";

const Grace = () => {
	const [isExploding, setIsExploding] = useState(false);
	const navigate = useNavigate();
	const githubCommit =
		"https://github.com/KralMarko123/portfolio/commit/815677405d2bb8e90aa1bbfb78e7df8c6396e8cc";

	return (
		<div className="page grace">
			<div className="grace-confetti">
				{isExploding && (
					<ConfettiExplosion particleCount={200} onComplete={() => setIsExploding(false)} />
				)}
			</div>
			<img
				className="grace-skeleton"
				src={dancingSkeleton}
				alt="dancing-skeleton"
				onClick={() => setIsExploding(true)}
			/>

			<p className="grace-description">
				Thank you Grace, I've made some{" "}
				<a href={githubCommit} target="_blank">
					changes
				</a>{" "}
				and added the dancing skeleton as well. You kind of look like it, click for a surprise.
			</p>
			<h1 className="grace-back" onClick={() => navigate(ROUTES.HOME)}>
				Click here to go back
			</h1>
		</div>
	);
};

export default Grace;
