import React from "react";
import Project from "./Project";
import cypressVideo from "../assets/videos/cypress.mp4";
import cypressPoster from "../assets/images/cypressPoster.jpg";
import "../styles/components/ProjectsSection.css";

const ProjectsSection = () => {
	return (
		<>
			<section className="projects">
				<span className="projects__title">Projects:</span>
				<Project id="cypress" videoSrc={cypressVideo} posterSrc={cypressPoster} />
			</section>
		</>
	);
};

export default ProjectsSection;
