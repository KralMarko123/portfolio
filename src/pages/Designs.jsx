import React from "react";
import { DESIGNS } from "../constants/Designs";
import "../styles/general/page.css";
import "../styles/pages/Designs.css";

const Designs = () => {
	return (
		<div className="designs page">
			<ul className="designs__list">
				{DESIGNS.map((design) => {
					return (
						<li
							className="designs__list__design"
							style={{ backgroundImage: `url(${design.poster})` }}
						>
							<a href={design.link} target="_blank">
								<div className="design__info">
									<h3 className="design__info__title">{design.title}</h3>
								</div>
							</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Designs;
