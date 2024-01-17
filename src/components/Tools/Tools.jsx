import { React } from 'react';
import { useInView } from 'react-intersection-observer';
import { TOOLS } from '../../constants/TOOLS';
import './Tools.css';

const Tools = () => {
	const [titleRef, titleInView] = useInView({ threshold: 0.5, triggerOnce: true });
	const [descRef, descInView] = useInView({ threshold: 0.5, triggerOnce: true });
	const [toolsRef, toolsInView] = useInView({ threshold: 0.5, triggerOnce: true });

	return (
		<section className='tools' id='tools'>
			<h1 className={`tools-title ${titleInView ? 'show' : ''}`} ref={titleRef}>
				Tools:
			</h1>
			<p
				className={`tools-description ${descInView ? 'halfShowAndEnterFromDown' : ''}`}
				ref={descRef}
			>
				// I think I can pick up anything quickly if need be, but these are my go to
			</p>
			<div
				className={`tools-container ${toolsInView ? 'showAndEnterFromDown' : ''}`}
				ref={toolsRef}
			>
				{TOOLS.map((t) => {
					return (
						<div key={t.title} className='tools-list'>
							<h3>{t.title}</h3>
							{t.items.map((i) => (
								<p key={i}>{i}</p>
							))}
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Tools;
