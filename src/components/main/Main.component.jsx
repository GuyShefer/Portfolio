import React, { useState } from 'react';
import './main.style.css';
import projectsArr from '../../utils/projects';
import Card from '../card/Card.component';

const Main = () => {
    const [projects] = useState(projectsArr);

    return (
        <div className="main-background">
            <main className="main">
                {projects && projects.map((project, index) => <Card key={index} project={project} />)}
            </main>
        </div>
    )
}

export default Main;