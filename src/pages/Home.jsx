import React from "react";
import BioSection from "../components/BioSection";
import ContactSection from "../components/ContactSection";
import IntroSection from "../components/IntroSection";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import ProjectsSection from "../components/ProjectsSection";
import ToolsSection from "../components/ToolsSection";
import { motion } from "framer-motion";
import { VARIANTS } from "../constants/AnimationVariants";
import "../styles/general/page.css";
import "../styles/pages/Home.css";

const Home = () => {
	return (
		<motion.div className="home page" exit={VARIANTS.page.exit}>
			<Header />
			<IntroSection />
			<ProjectsSection />
			<ToolsSection />
			<BioSection />
			<ContactSection />
			<Footer />
		</motion.div>
	);
};

export default Home;
