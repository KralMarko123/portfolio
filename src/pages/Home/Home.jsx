import React from "react";
import Footer from "../../components/layout/Footer/Footer";
import Header from "../../components/layout/Header/Header";
import Intro from "../../components/Intro/Intro";
import ProjectsSection from "../../components/Projects/ProjectsSection";
import Tools from "../../components/Tools/Tools";
import Bio from "../../components/Bio/Bio";
import Contact from "../../components/Contact/Contact";
import "./Home.css";

const Home = () => {
	return (
		<div className="home page">
			<Header />
			<Intro />
			<ProjectsSection />
			<Tools />
			<Bio />
			<Contact />
			<Footer />
		</div>
	);
};

export default Home;
