import React from "react";
import Project from "./Project";
import { PROJECTS } from "../../src/constants/Projects";
import "../styles/components/ProjectsSection.css";

const ProjectsSection = () => {
	return (
		<section className="projects">
			<h1 className="projects__title">Projects:</h1>
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
						links={p.links}
					/>
				);
			})}
		</section>
	);
};

export default ProjectsSection;
