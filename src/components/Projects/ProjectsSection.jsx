import { React } from "react";
import Project from "./Project";
import { PROJECTS } from "../../constants/PROJECTS";
import "./ProjectsSection.css";

const ProjectsSection = () => {
	return (
		<section id="projects" className="projects">
			<h1 className="projects-title">Projects:</h1>
			{PROJECTS.map((p) => {
				return (
					<Project
						key={p.id}
						id={p.id}
						title={p.title}
						description={p.description}
						stack={p.stack}
						links={p.links}
						thumbnail={p.thumbnail}
						mobileThumbnail={p.mobileThumbnail}
						extraParagraph={p.extraParagraph}
					/>
				);
			})}
		</section>
	);
};

export default ProjectsSection;
