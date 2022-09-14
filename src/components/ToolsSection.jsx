import { React, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { VARIANTS } from "../constants/AnimationVariants";
import "../styles/components/ToolsSection.css";

const ToolsSection = () => {
	const beTools = ["C#", "Java", ".NET", "Spring"];
	const feTools = ["React", "HTML", "CSS", "SCSS/SASS", "JavaScript", "jQuery"];
	const other = ["Git", "Cypress", "Selenium", "TDD"];

	const [toolsRef, toolsInView] = useInView({ threshold: 0.2, triggerOnce: true });
	const toolsAnimation = useAnimation();

	useEffect(() => {
		if (toolsInView) {
			toolsAnimation.start(VARIANTS.simple["visible"]);
		}
	}, [toolsInView]);

	return (
		<section className="tools">
			<span className="tools__title">Tools:</span>
			<p className="tools__desc">
				// I think I can pick up anything quickly if need be, but these are my go-to
			</p>
			<motion.div
				className="tools__lists"
				ref={toolsRef}
				animate={toolsAnimation}
				initial={VARIANTS.simple["hidden"]}
			>
				<div className="tools__lists__list">
					<h3>Back-End</h3>
					{beTools.map((tool) => (
						<p key={tool}>{tool}</p>
					))}
				</div>
				<div className="tools__lists__list">
					<h3>Front-End</h3>
					{feTools.map((tool) => (
						<p key={tool}>{tool}</p>
					))}
				</div>
				<div className="tools__lists__list">
					<h3>Other</h3>
					{other.map((tool) => (
						<p key={tool}>{tool}</p>
					))}
				</div>
			</motion.div>
		</section>
	);
};

export default ToolsSection;
