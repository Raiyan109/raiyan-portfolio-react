import React from 'react';
import styles from './Experience.module.css'
const Experience = () => {
    return (
        <div className=' items-center justify-center '>

            <h1 className="text-3xl font-bold mt-10 mb-10">What skills I have</h1>
            <h1 className="text-5xl font-bold mt-10 mb-10">My Experiences</h1>

            <div className={styles.frontendContainer}>
                <h1 className='flex justify-center items-center pt-5 font-bold text-2xl'>Frontend Development</h1>

            </div>
        </div>
    );
};

export default Experience;