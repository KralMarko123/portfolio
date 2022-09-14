import React from "react";
import BioSection from "../components/BioSection";
import ContactSection from "../components/ContactSection";
import IntroSection from "../components/IntroSection";
import Footer from "../components/layout/Footer";
import ProjectsSection from "../components/ProjectsSection";
import ToolsSection from "../components/ToolsSection";
import "../styles/general/page.css";
import "../styles/Home.css";

const Home = () => {
	return (
		<div className="home page">
			<IntroSection />
			<ProjectsSection />
			<ToolsSection />
			<BioSection />
			<ContactSection />
			<Footer />
		</div>
	);
};

export default Home;
