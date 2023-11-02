import React from "react";
import dancingSkeleton from "../../../assets/gifs/dancing skeleton.gif";
import confetti from "https://esm.run/canvas-confetti@1";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/ROUTES";
import "./Grace.css";

const Grace = () => {
	const githubCommit =
		"https://github.com/KralMarko123/portfolio/commit/815677405d2bb8e90aa1bbfb78e7df8c6396e8cc";
	const navigate = useNavigate();
	return (
		<div className="page grace">
			<img
				className="grace-skeleton"
				src={dancingSkeleton}
				alt="dancing-skeleton"
				onClick={() =>
					confetti({
						particleCount: 200,
						spread: 100,
					})
				}
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
