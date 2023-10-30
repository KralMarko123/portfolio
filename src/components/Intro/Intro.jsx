import React from "react";
import profilePicture from "../../assets/images/markoProfilePicture.jpg";
import { TbArrowNarrowDown } from "react-icons/tb";
import "./Intro.css";

const Intro = () => {
	return (
		<section className="intro" id="intro">
			<div className="intro-top">
				<div className="intro-text showAndEnterFromLeft" style={{ animationDelay: "0.5s" }}>
					<h1 className="intro-title">Hi! I'm Marko.</h1>
					<p>A down-to-earth, calm, determined 24 year old software engineer.</p>
					<p>
						When I'm not in front of a computer screen, I teach dance and play pool. I am currently
						a senior technician at{" "}
						<a href="https://www.endava.com/en/about/locations/adriatic/skopje" target="_blank">
							Endava
						</a>
						.
					</p>
				</div>
				<img
					src={profilePicture}
					alt="profile-image"
					className="intro-image show"
					style={{ animationDelay: "1s" }}
				/>
			</div>
			<TbArrowNarrowDown className="intro-arrow showAndBob" style={{ animationDelay: "2s" }} />
		</section>
	);
};

export default Intro;
