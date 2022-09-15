import { React, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BIOS } from "../constants/Bios";
import { VARIANTS } from "../constants/AnimationVariants";
import "../styles/components/BioSection.css";

const BioSection = () => {
	const [bioRef, bioIsInView] = useInView({ threshold: 0.1, triggerOnce: true });
	const bioAnimation = useAnimation();

	useEffect(() => {
		if (bioIsInView) {
			bioAnimation.start(VARIANTS.simple["visible"]);
		}
	}, [bioIsInView]);

	return (
		<section className="bio" id="bio">
			<h1 className="bio__title">Bio:</h1>
			{BIOS.map((bio, i) => (
				<motion.p
					className="bio__row"
					key={i}
					animate={bioAnimation}
					initial={VARIANTS.simple["hidden"]}
					ref={bioRef}
				>
					<span className="bio__row__year">{bio.year}</span>
					{bio.text}
				</motion.p>
			))}
		</section>
	);
};

export default BioSection;
