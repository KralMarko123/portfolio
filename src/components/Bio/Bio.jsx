import { React } from "react";
import { useInView } from "react-intersection-observer";
import { BIOS } from "../../constants/BIOS";
import "./Bio.css";

const Bio = () => {
	const { ref, inView, entry } = useInView({ threshold: 0.1, triggerOnce: true });

	return (
		<section className="bio" id="bio">
			<h1 className="bio-title">Bio:</h1>
			{BIOS.map((bio, i) => (
				<p className="bio-row" key={i} ref={ref}>
					<span className="bio-year">{bio.year}</span>
					{bio.text}
				</p>
			))}
		</section>
	);
};

export default Bio;
