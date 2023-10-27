import { React } from "react";
import { useInView } from "react-intersection-observer";
import "./Project.css";

const Project = ({ id, title, description, stack, links }) => {
	const { projectRef, projectInView } = useInView({ threshold: 0.1, triggerOnce: true });
	const { infoRef, infoInView } = useInView({ threshold: 0.1, triggerOnce: true });

	return (
		<div id={id} className="project" ref={projectRef}>
			<div className="project__overlay">
				<h1 className="project__title">{title}</h1>
				<p className="project__description">{description}</p>
			</div>
			<div className="info" ref={infoRef}>
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
					{links.map((l) => (
						<a
							href={l.url}
							className="info__links__link"
							target={`${l.internal ? "_self" : "_blank"}`}
						>
							{l.text} {l.icon}
						</a>
					))}
				</div>
			</div>
		</div>
	);
};

export default Project;
