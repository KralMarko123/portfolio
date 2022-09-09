import React from "react";

const Project = (id, videoSrc, posterSrc) => {
	return (
		<div id={id} className="projects__project">
			<video playsInline autoPlay muted loop poster={posterSrc}>
				<source src={videoSrc} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
	);
};

export default Project;
