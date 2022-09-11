import React from "react";
import Project from "./Project";
import { PROJECTS } from "../../src/constants/Projects";
import "../styles/components/ProjectsSection.css";

const ProjectsSection = () => {
	return (
		<section className="projects">
			<span className="projects__title">Projects:</span>
			{PROJECTS.map((p) => {
				return (
					<Project
						key={p.id}
						id={p.id}
						video={p.video}
						poster={p.poster}
						title={p.title}
						description={p.description}
						stack={p.stack}
					/>
				);
			})}
		</section>
	);
};

export default ProjectsSection;
