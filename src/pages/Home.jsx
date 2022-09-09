import React from "react";
import IntroSection from "../components/IntroSection";
import ProjectsSection from "../components/ProjectsSection";
import "../styles/general/page.css";
import "../styles/Home.css";

const Home = () => {
	return (
		<div className="home page">
			<IntroSection />
			<ProjectsSection />
		</div>
	);
};

export default Home;
