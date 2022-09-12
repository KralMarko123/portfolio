import { React, useRef } from "react";
import { FaVideo, FaGithub } from "react-icons/fa";
import "../styles/components/Project.css";

const Project = ({ id, video, poster, title, description, stack, links }) => {
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
			<div className="info">
				<span className="info__title">/* Tech Stack */</span>
				<div className="info__stacks">
					{stack.map((s) => {
						return <div className="info__stacks__stack">{s}</div>;
					})}
				</div>
				<span className="info__title">/* Check it out */</span>
				<div className="info__links">
					<a href={links.git} className="info__links__link" target="_blank">
						Source code {<FaGithub className="link__badge" />}
					</a>
					{links.demo && (
						<a href={links.demo} className="info__links__link" target="_blank">
							Demo Video {<FaVideo className="link__badge" />}
						</a>
					)}
				</div>
			</div>
		</>
	);
};

export default Project;
