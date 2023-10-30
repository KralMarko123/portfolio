import React, { useState } from "react";
import "./Header.css";

const NAV_TITLES = ["projects", "tools", "bio", "contact"];

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="header">
			<nav className="nav showAndEnterFromUp">
				<div
					className="nav-brand"
					onClick={() => document.getElementById("intro").scrollIntoView()}
				>
					marko.markovikj
				</div>

				<ul className="nav-list">
					{NAV_TITLES.map((t) => (
						<li
							key={t}
							className="nav-link"
							onClick={() => document.getElementById(t).scrollIntoView()}
						>
							{`${t}.`}
						</li>
					))}
				</ul>
			</nav>

			<nav className="mobile-nav showAndEnterFromUp">
				<div
					className="nav-brand"
					onClick={() => document.getElementById("intro").scrollIntoView()}
				>
					marko.markovikj
				</div>

				<span className="nav-mobile-toggle" onClick={() => setIsMenuOpen(true)}>
					menu.
				</span>

				<div className={`nav-overlay ${isMenuOpen ? "open" : ""}`}>
					<ul className="nav-list">
						{NAV_TITLES.map((t) => (
							<li
								key={t}
								className="nav-link"
								onClick={() => {
									document.getElementById(t).scrollIntoView();
									setIsMenuOpen(false);
								}}
							>
								{`${t}.`}
							</li>
						))}

						<span className="nav-mobile-toggle" onClick={() => setIsMenuOpen(false)}>
							close.
						</span>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;
