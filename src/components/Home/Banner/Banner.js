import React from 'react';
import bannarImg from '../../../assets/images/raiyanvab.jpg'
import styles from './Banner.module.css'
import RaiyanResume from '../../../assets/files/RaiyanResume.pdf'
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={bannarImg} />
                <div>
                    <p>Hi there ! I am Raiyan Kabir</p>
                    <h1 className="text-5xl font-bold">Freelance Web Developer</h1>

                    <button className="btn btn-primary">
                        <a className='btn btn-primary' href={RaiyanResume} download >Download Resume</a>
                    </button>

                    {/* <button className='btn btn-primary'><Link to={RaiyanResume} download>Download Resume</Link> </button> */}
                </div>
            </div>
        </div>
    );
};

export default Banner;