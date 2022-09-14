import { React, useState, useEffect } from "react";
import Project from "./Project";
import { PROJECTS } from "../../src/constants/Projects";
import "../styles/components/ProjectsSection.css";

const ProjectsSection = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			window.innerWidth <= 767 ? setIsMobile(true) : setIsMobile(false);
		};

		window.addEventListener("resize", handleResize);
		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, [isMobile]);

	return (
		<section className="projects">
			<h1 className="projects__title">Projects:</h1>
			{PROJECTS.map((p) => {
				return (
					<Project
						key={p.id}
						id={p.id}
						video={isMobile ? p.mobileVideo : p.video}
						poster={isMobile ? p.mobilePoster : p.poster}
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
