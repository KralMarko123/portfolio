import { React, useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaVideo, FaGithub, FaLink } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { VARIANTS } from "../constants/AnimationVariants";
import "../styles/components/Project.css";

const Project = ({
	id,
	video,
	mobileVideo,
	poster,
	mobilePoster,
	title,
	description,
	stack,
	links,
}) => {
	//Resize logic
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => {
			window.innerWidth <= 767 ? setIsMobile(true) : setIsMobile(false);
			projectVideo.current.load();
		};
		checkMobile();

		window.addEventListener("resize", checkMobile);
		return () => {
			window.removeEventListener("resize", checkMobile);
		};
	}, [isMobile]);

	//Animation logic
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

	//Navigation logic
	let navigate = useNavigate();

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
				<video autoPlay muted loop poster={isMobile ? mobilePoster : poster} ref={projectVideo}>
					<source src={isMobile ? mobileVideo : video} type="video/mp4" />
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
					{links.git && (
						<a href={links.git} className="info__links__link" target="_blank">
							Source code {<FaGithub className="link__badge" />}
						</a>
					)}
					{links.demo && (
						<a href={links.demo} className="info__links__link" target="_blank">
							Demo Video {<FaVideo className="link__badge" />}
						</a>
					)}
					{links.live && (
						<a className="info__links__link" onClick={() => navigate(links.live)}>
							Visit the site {<FaLink className="link__badge" />}
						</a>
					)}
				</div>
			</motion.div>
		</>
	);
};

export default Project;
