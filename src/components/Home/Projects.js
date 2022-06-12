import React, { useEffect, useState } from 'react';
import Project from './Project';

const Projects = () => {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('https://still-depths-34019.herokuapp.com/project')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:m-3 sm:m-4'>
                {
                    projects.map(project => <Project
                        key={project._id}
                        project={project}
                    ></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;