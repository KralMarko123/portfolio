import React from "react";
import { useInView } from "react-intersection-observer";
import "./Footer.css";

const Footer = () => {
	const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

	return (
		<footer className={`footer ${inView ? "show" : ""}`} ref={ref}>
			<p className="footer-text">© 2022 Marko Markovikj. All rights reserved.</p>
			<p className="footer-text">Built different, based in Skopje.</p>
		</footer>
	);
};

export default Footer;
