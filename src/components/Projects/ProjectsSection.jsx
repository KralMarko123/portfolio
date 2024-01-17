import { React } from 'react';
import Project from './Project';
import { PROJECTS } from '../../constants/PROJECTS';
import { useInView } from 'react-intersection-observer';
import './ProjectsSection.css';

const ProjectsSection = () => {
	const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
	return (
		<section id='projects' className='projects'>
			<h1 className={`projects-title ${inView ? 'show' : ''}`} ref={ref}>
				Projects:
			</h1>
			{PROJECTS.map((p) => {
				return (
					<Project
						key={p.id}
						id={p.id}
						title={p.title}
						description={p.description}
						stack={p.stack}
						links={p.links}
						thumbnail={p.thumbnail}
						mobileThumbnail={p.mobileThumbnail}
						extraParagraph={p.extraParagraph}
					/>
				);
			})}
		</section>
	);
};

export default ProjectsSection;
