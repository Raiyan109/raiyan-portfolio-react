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
            <div className='flex items-center justify-center'><h1 className="text-5xl font-bold mt-10 mb-10">My Projects</h1></div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:m-3 sm:ml-2 justify-items-center mt-10 sm:mt-5 lg:mt-10'>

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