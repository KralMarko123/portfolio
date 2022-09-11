import { React, useRef } from "react";
import "../styles/components/Project.css";

const Project = ({ id, video, poster, title, description, stack }) => {
	const projectVideo = useRef();

	const toggleVideo = (shouldPlay) => {
		shouldPlay ? projectVideo.current.play() : projectVideo.current.pause();
	};

	return (
		<>
			<div
				id={id}
				className="project"
				onMouseEnter={() => toggleVideo(false)}
				onMouseLeave={() => toggleVideo(true)}
			>
				<video autoPlay muted loop poster={poster} ref={projectVideo}>
					<source src={video} type="video/mp4" />
					Your browser does not support the video tag.
				</video>

				<div className="project__overlay">
					<h1 className="project__title">{title}</h1>
					<p className="project__description">{description}</p>
				</div>
			</div>
			<div className="stacks">
				<span className="stacks__title">/* Tech Stack</span>
				<div className="stacks__list">
					{stack.map((s) => {
						return <div className="stacks__stack">{s}</div>;
					})}
				</div>
			</div>
		</>
	);
};

export default Project;
