import { React } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { DESIGNS } from "../constants/Designs";
import { VARIANTS } from "../constants/AnimationVariants";
import { ROUTES } from "../routes/ROUTES";
import "../styles/general/page.css";
import "../styles/pages/Designs.css";

const Designs = () => {
	let navigate = useNavigate();

	return (
		<motion.div
			className="designs page"
			animate={VARIANTS.page.enter}
			initial={VARIANTS.page.hidden}
			exit={VARIANTS.page.exit}
		>
			<div className="designs__info">
				<div className="designs__info__left">
					<h1 className="designs__info__title">Designs:</h1>
					<span className="designs__info__desc">// Clicking on a card opens up a new tab</span>
				</div>
				<div className="designs__info__right">
					<div className="designs__back__button" onClick={() => navigate(ROUTES.home)}>
						back.
					</div>
				</div>
			</div>
			<ul className="designs__list">
				{DESIGNS.map((design, i) => {
					return (
						<li key={i} className="design" style={{ backgroundImage: `url(${design.poster})` }}>
							<a href={design.link} target="_blank">
								<div className="design__info">
									<h3 className="design__info__title">{design.title}</h3>
								</div>
							</a>
						</li>
					);
				})}
			</ul>
		</motion.div>
	);
};

export default Designs;
