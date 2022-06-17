import React from 'react';
import bannarImg from '../../../assets/images/photostudio-2-designify (1).png'
import styles from './Banner.module.css'
import RaiyanResume from '../../../assets/files/RaiyanResume.pdf'
// import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img className='' src={bannarImg} />
                <div>
                    <p>Hi there ! I am Raiyan Kabir</p>
                    <h1 className="text-5xl font-bold">Freelance Web Developer</h1>

                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-5 border-x-4 border-amber-400">
                        <a className='' href={RaiyanResume} download >Download Resume</a>
                    </button>


                </div>
            </div>
        </div>
    );
};

export default Banner;