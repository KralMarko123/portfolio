import { React } from "react";
import { useNavigate } from "react-router-dom";
import { DESIGNS } from "../../constants/DESIGNS";
import { ROUTES } from "../../constants/ROUTES";
import "./Designs.css";

const Designs = () => {
	const navigate = useNavigate();

	return (
		<div className="designs page">
			<div className="designs-info">
				<div className="designs-info-left">
					<h1 className="designs-title">Designs:</h1>
					<span className="designs-description">// Clicking on a card opens up a new tab</span>
				</div>
				<div className="designs-info-right">
					<div className="designs-back" onClick={() => navigate(ROUTES.HOME)}>
						back.
					</div>
				</div>
			</div>
			<ul className="designs-list">
				{DESIGNS.map((d, i) => {
					return (
						<li key={i} className="design" style={{ backgroundImage: `url(${d.thumbnail})` }}>
							<a href={d.link} target="_blank">
								<div className="design-info">
									<h3 className="design-info-title">{d.title}</h3>
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
