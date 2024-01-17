import { React, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { DESIGNS } from '../../constants/DESIGNS';
import { ROUTES } from '../../constants/ROUTES';
import './Designs.css';

const Designs = () => {
	const navigate = useNavigate();
	const titleRef = useRef();

	useEffect(() => {
		titleRef.current.scrollIntoView({ behavior: 'smooth' });
	}, []);

	return (
		<div className='designs page'>
			<div className='designs-info showAndEnterFromUp'>
				<div className='designs-info-left'>
					<h1 className='designs-title' ref={titleRef}>
						Designs:
					</h1>
					<span className='designs-description'>// Clicking on a card opens up a new tab</span>
				</div>
				<div className='designs-info-right'>
					<div className='designs-back' onClick={() => navigate(ROUTES.HOME)}>
						back.
					</div>
				</div>
			</div>
			<ul className='designs-list'>
				{DESIGNS.map((d, i) => {
					return (
						<li
							key={i}
							className='design showAndEnterFromDown'
							style={{
								backgroundImage: `url(${d.thumbnail})`,
								animationDelay: `${i * 0.15 + 0.5}s`
							}}
						>
							<a href={d.link} target='_blank'>
								<div className='design-info'>
									<h3 className='design-info-title'>{d.title}</h3>
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
