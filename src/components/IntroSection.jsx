import React from "react";
import profileImage from "../assets/images/marko.jpg";
import "../styles/components/IntroSection.css";

const IntroSection = () => {
	return (
		<section className="intro">
			<div className="intro__text">
				<span>Hi! I'm Marko.</span>
				<br />
				<p>A down-to-earth, calm, determined 23 year old software engineering student.</p>
				<p>
					When I'm not in front of a computer screen, I teach street dance and play pool. I am
					currently working as a tester at{" "}
					<a
						href="https://careers.endava.com/en/Explore-Locations/Central-Europe/Skopje"
						target="_blank"
					>
						Endava
					</a>
					.
				</p>
			</div>
			<img src={profileImage} alt="profile-image" className="intro__image" />
		</section>
	);
};

export default IntroSection;
