import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import "./Project.css";

const Project = ({
	id,
	title,
	description,
	stack,
	links,
	thumbnail,
	mobileThumbnail,
	extraParagraph,
}) => {
	const navigate = useNavigate();
	const [cardRef, cardInView] = useInView({ threshold: 0.5, triggerOnce: true });
	const [infoRef, infoInView] = useInView({ threshold: 0.5, triggerOnce: true });
	const [width, setWidth] = useState(window.innerWidth);

	const handleWindowSizeChange = () => {
		setWidth(window.innerWidth);
	};
	useEffect(() => {
		window.addEventListener("resize", handleWindowSizeChange);
		return () => window.removeEventListener("resize", handleWindowSizeChange);
	}, []);

	const isMobile = width <= 768;

	return (
		<div id={id} className="project">
			<div className={`project-card ${cardInView ? "showAndEnterFromDown" : ""}`} ref={cardRef}>
				<img
					className="project-thumbnail"
					src={isMobile ? mobileThumbnail : thumbnail}
					alt={`${title}-thumbnail`}
				/>
				<h1 className="project-title">{title}</h1>
				<p className="project-description">{description}</p>
			</div>
			<div className={`info ${infoInView ? "showAndEnterFromDown" : ""}`} ref={infoRef}>
				<span className="info-title">// Tech Stack</span>
				<div className="stack-list">
					{stack.map((s) => {
						return (
							<div className="info-stack" key={s}>
								{s}
							</div>
						);
					})}
				</div>
				<span className="info-title">// Check it out</span>
				{links.length > 0 && (
					<div className="info-links">
						{links.map((l) => (
							<a
								className="info-link"
								key={l.url}
								href={l.internal ? null : l.url}
								target={l.internal ? null : "_blank"}
								onClick={() => {
									if (l.internal) navigate(l.url);
								}}
							>
								{l.text} {l.icon}
							</a>
						))}
					</div>
				)}
				{extraParagraph && <p className="info-paragraph">{extraParagraph}</p>}
			</div>
		</div>
	);
};

export default Project;
