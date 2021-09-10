import React, { useState } from 'react';
import './main.style.css';
import initProjects from '../../utils/projects';
import Card from '../card/Card.component';

const Main = () => {
    const [projects] = useState(initProjects);

    return (
        <main className="main">
            {projects && projects.map((project, index) => <Card key={index} project={project} />)}
        </main>
    )
}

export default Main;