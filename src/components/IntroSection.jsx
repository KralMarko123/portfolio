import React from "react";
import profileImage from "../assets/images/marko.jpg";
import { TbArrowNarrowDown } from "react-icons/tb";
import { motion } from "framer-motion";
import { VARIANTS } from "../constants/AnimationVariants";
import "../styles/components/IntroSection.css";

const IntroSection = () => {
	return (
		<>
			<section className="intro">
				<div className="intro__top">
					<div className="intro__text">
						<motion.span variants={VARIANTS.label} animate="visible" initial="hidden">
							Hi! I'm Marko.
						</motion.span>
						<motion.p variants={VARIANTS.text} animate="visible" initial="hidden">
							A down-to-earth, calm, determined 23 year old software engineering student.
						</motion.p>
						<motion.p variants={VARIANTS.text} animate="visible" initial="hidden">
							When I'm not in front of a computer screen, I teach street dance and play pool. I am
							currently working as a tester at{" "}
							<a
								href="https://careers.endava.com/en/Explore-Locations/Central-Europe/Skopje"
								target="_blank"
							>
								Endava
							</a>
							.
						</motion.p>
					</div>
					<motion.img
						src={profileImage}
						alt="profile-image"
						className="intro__image"
						variants={VARIANTS.image}
						animate="visible"
						initial="hidden"
					/>
				</div>
				<motion.div
					className="intro__bottom"
					animate={{ opacity: 1 }}
					initial={{ opacity: 0 }}
					transition={{ delay: 5 }}
				>
					<TbArrowNarrowDown className="intro__arrow enter" />
				</motion.div>
			</section>
		</>
	);
};

export default IntroSection;
