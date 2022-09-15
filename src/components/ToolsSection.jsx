import { React, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { VARIANTS } from "../constants/AnimationVariants";
import "../styles/components/ToolsSection.css";

const ToolsSection = () => {
	const toolTitles = ["Back-End", "Front-End", "Other"];
	const beTools = ["C#", "Java", ".NET", "Spring"];
	const feTools = ["React", "HTML", "CSS", "SCSS/SASS", "JavaScript", "jQuery"];
	const other = ["Git", "Cypress", "Selenium", "TDD"];

	const [toolsRef, toolsInView] = useInView({ threshold: 0.1, triggerOnce: true });
	const toolsAnimation = useAnimation();

	useEffect(() => {
		if (toolsInView) {
			toolsAnimation.start(VARIANTS.simple["visible"]);
		}
	}, [toolsInView]);

	return (
		<section className="tools" id="tools">
			<h1 className="tools__title">Tools:</h1>
			<p className="tools__desc">
				// I think I can pick up anything quickly if need be, but these are my go-to
			</p>
			<motion.div
				className="tools__lists"
				ref={toolsRef}
				animate={toolsAnimation}
				initial={VARIANTS.simple["hidden"]}
			>
				{toolTitles.map((title, i) => {
					return (
						<div key={title} className="tools__lists__list">
							<h3>{title}</h3>
							{i === 0 && beTools.map((tool) => <p key={tool}>{tool}</p>)}
							{i === 1 && feTools.map((tool) => <p key={tool}>{tool}</p>)}
							{i === 2 && other.map((tool) => <p key={tool}>{tool}</p>)}
						</div>
					);
				})}
			</motion.div>
		</section>
	);
};

export default ToolsSection;
