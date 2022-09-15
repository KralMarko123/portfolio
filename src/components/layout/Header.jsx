import { React, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { VARIANTS } from "../../constants/AnimationVariants";
import "../../styles/components/Header.css";

const navTitles = ["projects", "tools", "bio", "contact"];

const Nav = () => {
	return (
		<nav className="header__nav">
			<div className="nav__brand">
				<a href="/#intro">marko.markovikj</a>
			</div>
			<ul className="nav__list">
				{navTitles.map((title) => (
					<li key={title} className="nav__list__link">
						<a href={`/#${title}`}>{title}.</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

const MobileNav = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="header__nav">
			<div className="nav__brand">
				<a href="/#intro">marko.markovikj</a>
			</div>
			<span className="nav__toggle" onClick={() => setIsOpen(true)}>
				menu.
			</span>
			<div className={`nav__overlay ${isOpen ? "open" : ""}`}>
				<ul className="nav__list">
					<div className="nav__toggle" onClick={() => setIsOpen(false)}>
						close.
					</div>
					{navTitles.map((title) => (
						<li key={title} className="nav__list__link">
							<a href={`/#${title}`} onClick={() => setIsOpen(false)}>
								{title}.
							</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

const Header = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => {
			window.innerWidth <= 1199 ? setIsMobile(true) : setIsMobile(false);
		};
		checkMobile();

		window.addEventListener("resize", checkMobile);
		return () => {
			window.removeEventListener("resize", checkMobile);
		};
	}, [isMobile]);

	return (
		<motion.header className="header" variants={VARIANTS.header} animate="visible" initial="hidden">
			{!isMobile ? <Nav /> : <MobileNav />}
		</motion.header>
	);
};

export default Header;
