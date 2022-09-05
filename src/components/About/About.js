import React from 'react';
import styles from './About.module.css'
import image from '../../assets/images/photostudio-2-designify (1).png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faFolder, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';



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

                <div className={styles.aboutContent}>
                    <div className={styles.aboutCards}>
                        <article className={styles.aboutCard}>
                            <FontAwesomeIcon icon={faAward} className={styles.aboutIcon} />
                            <h5>Experience</h5>
                            <small>3 + Years Working</small>
                        </article>
                        <article className={styles.aboutCard}>
                            <FontAwesomeIcon icon={faUser} className={styles.aboutIcon} />
                            <h5>Clients</h5>
                            <small>200+ Worldwide</small>
                        </article>
                        <article className={styles.aboutCard}>
                            <FontAwesomeIcon icon={faFolder} className={styles.aboutIcon} />
                            <h5>Projects</h5>
                            <small>80+ Completed</small>
                        </article>
                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic rerum dolorum esse libero inventore mollitia natus iste voluptatibus eos porro perspiciatis omnis in aliquid, maxime qui quia alias magnam officiis?</p>

                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-5 border-x-4 border-amber-400">
                        <a href="#contact">Let's Talk</a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;