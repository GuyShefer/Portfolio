import React from 'react';
import './card.style.css';
import techImages from '../../utils';

const Card = ({ project }) => {

    return (
        <div className="card">
            <h3 className="title">{project.name}</h3>
            <p className="description">{project.description}</p>

            <div className="cardBadges">
                {project.technologies && project.technologies.map(technology => {
                    return <div key={technology} className="badge"
                        style={{ backgroundImage: `url(${require(`../../assets/images/tech/${techImages[technology]}`).default})` }}>
                    </div>
                })}
            </div>

            <div className="card-buttons">
                <a href={project.git_url} target="_blank" rel="noreferrer" className="source btn">Source</a>
                {project.demo_url.length > 0 ?
                    <a href={project.demo_url} target="_blank" rel="noreferrer" className="project btn">Project</a> :
                    null
                }
            </div>
        </div>
    )
}

export default Card;