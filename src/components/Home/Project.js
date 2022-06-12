import React from 'react';
import { useNavigate } from 'react-router-dom';

const Project = ({ project }) => {
    const navigate = useNavigate()

    const goToDetails = () => {
        navigate(`/project/${_id}`)
    }
    const { img, name, _id } = project
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure><img className='min-h-full' src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>

                <div class="card-actions justify-end">
                    <button onClick={goToDetails} class="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
};

export default Project;