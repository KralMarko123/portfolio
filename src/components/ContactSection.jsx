import { React, useEffect } from "react";
import { FaMailBulk, FaGithub, FaLinkedin } from "react-icons/fa";
import { VARIANTS } from "../constants/AnimationVariants";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/components/ContactSection.css";

const ContactSection = () => {
	const [contactRef, contactIsInView] = useInView({ threshold: 0.1, triggerOnce: true });
	const contactAnimation = useAnimation();

	useEffect(() => {
		if (contactIsInView) {
			contactAnimation.start(VARIANTS.simple["visible"]);
		}
	}, [contactIsInView]);

	return (
		<section className="contact" id="contact">
			<h1 className="contact__title">Contact:</h1>
			<motion.div
				className="contact__info"
				ref={contactRef}
				animate={contactAnimation}
				initial={VARIANTS.simple["hidden"]}
			>
				<p className="contact__info__text">
					Want to ask me a question or get in touch? <br /> Feel free to send me an email or find me
					on my other socials!
				</p>

				<div className="contact__info__links">
					<a href="mailto:kralmarko123@gmail.com" target="_blank" className="social__link">
						<FaMailBulk />
					</a>

					<a href="https://github.com/KralMarko123" target="_blank" className="social__link">
						<FaGithub />
					</a>

					<a
						href="https://www.linkedin.com/in/marko-markovikj/"
						target="_blank"
						className="social__link"
					>
						<FaLinkedin />
					</a>
				</div>
			</motion.div>
		</section>
	);
};

export default ContactSection;
