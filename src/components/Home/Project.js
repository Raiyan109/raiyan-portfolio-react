import React from 'react';
import { useNavigate } from 'react-router-dom';

const Project = ({ project }) => {
    const navigate = useNavigate()

    const goToDetails = () => {
        navigate(`/project/${_id}`)
    }
    const { img, name, _id } = project
    return (
        <div class="card w-96 bg-base-100 shadow-xl border-x-4 border-amber-400 overflow-hidden rounded-lg transition-all ease-out duration-300 hover:scale-95 sm:h-80 lg:h-96">
            <figure><img style={{ height: "200px" }} className='h-full w-full object-cover' src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>

                <div class="card-actions justify-end">
                    <button onClick={goToDetails} class="btn btn-outline ">Details</button>
                </div>
            </div>
        </div>
    );
};

export default Project;