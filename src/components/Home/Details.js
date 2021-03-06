import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {

    const { id } = useParams()
    const [details, setDetails] = useState([])

    useEffect(() => {
        fetch(`https://still-depths-34019.herokuapp.com/project/${id}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])
    return (

        <div class="flex h-screen bg-gray-900 antialiased">
            <div class="relative m-auto">
                <div class="z-50 p-3 mt-10 max-w-xs w-xs grid grid-cols-1 cursor-default select-none rounded bg-gray-400 dark:bg-gray-900 shadow-lg">
                    <div class="font-semibold text-xl mb-2 ml-2 text-gray-900 dark:text-white">{details.name}</div>
                    <div class="flex">
                        <button
                            class="transform mouse-pointer bg-gray-900 text-sm text-white mx-2 py-1 px-2 font-semibold rounded hover:bg-gray-700 dark:hover:bg-gray-600 hover:scale-90   focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"><a href={details.live}>Live</a></button>
                        <button
                            class="transform mouse-pointer bg-gray-900 text-sm text-white px-2 font-semibold rounded hover:bg-gray-700 dark:hover:bg-gray-600  hover:scale-90 dark:focus:bg-gray-600 focus:outline-none"><a href={details.code}>Code</a></button>
                    </div>
                    <div class="my-2 mx-2 mr-5">
                        <p class="text-gray-900 text-sm">
                            {details.description}
                        </p>
                    </div>
                    <div>
                        <div class="font-semibold text-l text-gray-900">Tech Stack:</div>
                        <div>
                            <span class="transform transition-all duration-150 inline-block bg-blue-400 bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-blue-900  hover:shadow-sm  hover:scale-105">ReactJS</span>
                            <span class="transform transition-all duration-150 inline-block bg-pink-400 bg-opacity-100 rounded px-1 py-1  text-xs font-thin text-pink-900  hover:shadow-sm  hover:scale-105">Tailwind</span>
                            <span class="transform transition-all duration-150 inline-block bg-yellow-400  bg-opacity-75 rounded px-1 py-1  text-xs font-thin text-yellow-900 hover:shadow-sm  hover:scale-105">Javascript</span>
                        </div>
                    </div>
                </div>
                <img
                    class="absolute z-0 mx-72 -my-56 h-64 max-w-xs w-xl object-cover object-top hover:bg-opacity-50 transform hover:scale-125 border-gray-600 border border-opacity-50 rounded-xl shadow-lg transition-all duration-150"
                    src={details.img}>
                </img>
            </div>
        </div>
    );
};

export default Details;