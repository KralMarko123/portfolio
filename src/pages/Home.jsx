import React from "react";
import IntroSection from "../components/IntroSection";
import Footer from "../components/layout/Footer";
import ProjectsSection from "../components/ProjectsSection";
import "../styles/general/page.css";
import "../styles/Home.css";

const Home = () => {
	return (
		<div className="home page">
			<IntroSection />
			<ProjectsSection />
			<Footer />
		</div>
	);
};

export default Home;
