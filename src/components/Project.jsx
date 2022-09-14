import { React, useRef, useEffect } from "react";
import { FaVideo, FaGithub, FaLink } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { VARIANTS } from "../constants/AnimationVariants";
import "../styles/components/Project.css";

const Project = ({ id, videoPath, poster, title, description, stack, links }) => {
	const videoURL = require(`../assets/videos/${videoPath}`);
	const projectVideo = useRef();
	const toggleVideo = (shouldPlay) => {
		shouldPlay ? projectVideo.current.play() : projectVideo.current.pause();
	};

	const [projectRef, projectInView] = useInView({ threshold: 0.1, triggerOnce: true });
	const [infoRef, infoInView] = useInView({ threshold: 0.1, triggerOnce: true });
	const projectAnimation = useAnimation();
	const infoAnimation = useAnimation();

	useEffect(() => {
		if (projectInView) {
			projectAnimation.start(VARIANTS.simple["visible"]);
		}

		if (infoInView) {
			infoAnimation.start(VARIANTS.simple["visible"]);
		}
	}, [projectInView, infoInView]);

	return (
		<>
			<motion.div
				id={id}
				className="project"
				onMouseEnter={() => toggleVideo(false)}
				onMouseLeave={() => toggleVideo(true)}
				ref={projectRef}
				animate={projectAnimation}
				initial={VARIANTS.simple["hidden"]}
			>
				<video autoPlay muted loop poster={poster} ref={projectVideo}>
					<source src={videoURL} type="video/mp4" />
					Your browser does not support the video tag.
				</video>

				<div className="project__overlay">
					<h1 className="project__title">{title}</h1>
					<p className="project__description">{description}</p>
				</div>
			</motion.div>
			<motion.div
				className="info"
				ref={infoRef}
				animate={infoAnimation}
				initial={VARIANTS.simple["hidden"]}
			>
				<span className="info__title">// Tech Stack</span>
				<div className="info__stacks">
					{stack.map((s) => {
						return (
							<div className="info__stacks__stack" key={s}>
								{s}
							</div>
						);
					})}
				</div>
				<span className="info__title">// Check it out</span>
				<div className="info__links">
					<a href={links.git} className="info__links__link" target="_blank">
						Source code {<FaGithub className="link__badge" />}
					</a>
					{links.demo && (
						<a href={links.demo} className="info__links__link" target="_blank">
							Demo Video {<FaVideo className="link__badge" />}
						</a>
					)}
					{links.live && (
						<a href={links.live} className="info__links__link" target="_blank">
							Visit the site {<FaLink className="link__badge" />}
						</a>
					)}
				</div>
			</motion.div>
		</>
	);
};

export default Project;
