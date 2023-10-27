import { React } from "react";
import Project from "./Project";
import { PROJECTS } from "../../constants/PROJECTS";
import "./ProjectsSection.css";

const ProjectsSection = () => {
	return (
		<section id="projects" className="projects">
			<h1 className="projects__title">Projects:</h1>
			{PROJECTS.map((p) => {
				return (
					<Project
						key={p.id}
						id={p.id}
						video={p.video}
						mobileVideo={p.mobileVideo}
						poster={p.poster}
						mobilePoster={p.mobilePoster}
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
