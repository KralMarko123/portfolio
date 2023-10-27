import { React } from "react";
import { useInView } from "react-intersection-observer";
import { TOOLS } from "../../constants/TOOLS";
import "./Tools.css";

const Tools = () => {
	const { ref, inView, entry } = useInView({ threshold: 0.1, triggerOnce: true });

	return (
		<section className="tools" id="tools">
			<h1 className="tools__title">Tools:</h1>
			<p className="tools__desc">
				// I think I can pick up anything quickly if need be, but these are my go-to
			</p>
			<div className="tools__lists" ref={ref}>
				{TOOLS.map((t) => {
					return (
						<div key={t.title} className="tools__lists__list">
							<h3>{t.title}</h3>
							{t.items.map((i) => (
								<p key={i}>{i}</p>
							))}
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Tools;
