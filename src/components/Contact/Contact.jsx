import { React } from "react";
import { useInView } from "react-intersection-observer";
import { CONTACT_LINKS } from "../../constants/LINKS";
import "./Contact.css";

const Contact = () => {
	const { ref, inView, entry } = useInView({ threshold: 0.1, triggerOnce: true });

	return (
		<section className="contact" id="contact">
			<h1 className="contact-title">Contact:</h1>
			<div className="contact-info" ref={ref}>
				<p className="contact-text">
					Want to ask me a question or get in touch? Feel free to send me an email or find me on my
					other socials!
				</p>

				<div className="contact-links">
					{CONTACT_LINKS.map((cl) => (
						<a key={cl.link} href={cl.link} target="_blank" className="social-link">
							{cl.icon}
						</a>
					))}
				</div>
			</div>
		</section>
	);
};

export default Contact;
