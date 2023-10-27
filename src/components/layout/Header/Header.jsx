import { React } from "react";
import "./Header.css";

const NAV_TITLES = ["projects", "tools", "bio", "contact"];

const Header = () => {
	return (
		<header className="header">
			<nav className="header__nav">
				<div className="nav__brand" onClick={() => document.getElementById("intro")}>
					marko.markovikj
				</div>
				<span className="nav-mobile__toggle" onClick={() => setIsOpen(true)}>
					menu.
				</span>
				<ul className="nav__list">
					<div className="nav-mobile__toggle" onClick={() => setIsOpen(false)}>
						close.
					</div>
					{NAV_TITLES.map((t) => (
						<li
							key={t}
							className="nav__list__link"
							onClick={() => document.getElementById(t).scrollIntoView()}
						>
							{`${t}.`}
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
