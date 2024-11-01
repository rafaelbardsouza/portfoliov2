import projects from '../assets/projects.json';
import '../styles/projects.scss';

export default function Projects() {
    return (
        <section id="projects">
            <div className="projects">
                {projects.map((project, index) => (
                    <div 
                        key={index} 
                        className="project" 
                        onClick={() => { window.open(project.link, '_blank') }} 
                        style={{ 
                            backgroundImage: `url(${project.image})`,
                        }}
                    >
                        <div className='info'>
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                            <small>{project.technologies.join(', ')}</small>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}