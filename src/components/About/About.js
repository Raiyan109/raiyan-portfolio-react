import React from 'react';
import styles from './About.module.css'
import image from '../../assets/images/photostudio-2-designify (1).png'

const About = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold mt-20 mb-10 text-center opacity-80">Get to know</h1>
            <h1 className="text-5xl font-bold mt-10 mb-10 text-center">About Me</h1>

            <div className={styles.container}>
                <div className={styles.aboutMe}>
                    <div className={styles.aboutMeImage}>
                        <img src={image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;