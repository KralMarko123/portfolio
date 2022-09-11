import React from "react";

const Project = ({ id, video, poster, title, description }) => {
	return (
		<div id={id} className="projects__project">
			<video playsInline autoPlay muted loop poster={poster}>
				<source src={video} type="video/mp4" />
				Your browser does not support the video tag.
			</video>

			<div className="project__overlay">
				<h1 className="project__title">{title}</h1>
				<p className="project__description">{description}</p>
			</div>
		</div>
	);
};

export default Project;
