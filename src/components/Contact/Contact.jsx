import { React } from "react";
import { useInView } from "react-intersection-observer";
import { CONTACT_LINKS } from "../../constants/LINKS";
import "./Contact.css";

const Contact = () => {
	const { ref, inView, entry } = useInView({ threshold: 0.1, triggerOnce: true });

	return (
		<section className="contact" id="contact">
			<h1 className="contact__title">Contact:</h1>
			<div className="contact__info" ref={ref}>
				<p className="contact__info__text">
					Want to ask me a question or get in touch? <br /> Feel free to send me an email or find me
					on my other socials!
				</p>

				<div className="contact__info__links">
					{CONTACT_LINKS.map((cl) => (
						<a key={cl.link} href={cl.link} target="_blank" className="social__link">
							{cl.icon}
						</a>
					))}
				</div>
			</div>
		</section>
	);
};

export default Contact;
