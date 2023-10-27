import { React } from "react";
import { useNavigate } from "react-router-dom";
import { DESIGNS } from "../../constants/DESIGNS";
import {ROUTES} from "../../constants/ROUTES";
import "./Designs.css";

const Designs = () => {
	const navigate = useNavigate();

	return (
		<div className="designs page">
			<div className="designs__info">
				<div className="designs__info__left">
					<h1 className="designs__info__title">Designs:</h1>
					<span className="designs__info__desc">// Clicking on a card opens up a new tab</span>
				</div>
				<div className="designs__info__right">
					<div className="designs__back__button" onClick={() => navigate(ROUTES.HOME)}>
						back.
					</div>
				</div>
			</div>
			<ul className="designs__list">
				{DESIGNS.map((design, i) => {
					return (
						<li key={i} className="design" style={{ backgroundImage: `url(${design.poster})` }}>
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
