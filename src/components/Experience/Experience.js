import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
import styles from './Experience.module.css'
const Experience = () => {
    return (
        <div className={styles.container}>

            <h1 className="text-2xl font-bold mt-20 mb-10 text-center opacity-80">What skills I have</h1>
            <h1 className="text-5xl font-bold mt-10 mb-10 text-center">My Experiences</h1>

            <div className={styles.experienceContainer}>
                <div className={styles.frontendContainer}>
                    <h1 className='flex justify-center items-center pt-5 font-bold text-2xl'>Frontend Development</h1>

                    <div className={styles.frontendContent}>
                        <article className={styles.frontendDetails}>
                            <FontAwesomeIcon className={styles.experienceFontAwesome} icon={faCheckCircle} color='golden' />
                            <div>
                                <h4 className='text-2xl'>HTML</h4>
                                <small className='font-thin'>Experienced</small>
                            </div>
                        </article>
                        <article className={styles.frontendDetails}>
                            <FontAwesomeIcon className={styles.experienceFontAwesome} icon={faCheckCircle} color='golden' />
                            <div>
                                <h4 className='text-2xl'>CSS</h4>
                                <small className='font-thin'>Experienced</small>
                            </div>
                        </article>
                        <article className={styles.frontendDetails}>
                            <FontAwesomeIcon className={styles.experienceFontAwesome} icon={faCheckCircle} color='golden' />
                            <div>
                                <h4 className='text-2xl'>JavaScript</h4>
                                <small className='font-thin'>Experienced</small>
                            </div>
                        </article>
                        <article className={styles.frontendDetails}>
                            <FontAwesomeIcon className={styles.experienceFontAwesome} icon={faCheckCircle} color='golden' />
                            <div>
                                <h4 className='text-2xl'>Bootstrap</h4>
                                <small className='font-thin'>Experienced</small>
                            </div>
                        </article>
                        <article className={styles.frontendDetails}>
                            <FontAwesomeIcon className={styles.experienceFontAwesome} icon={faCheckCircle} color='golden' />
                            <div>
                                <h4 className='text-2xl'>Tailwind</h4>
                                <small className='font-thin'>Experienced</small>
                            </div>
                        </article>
                        <article className={styles.frontendDetails}>
                            <FontAwesomeIcon className={styles.experienceFontAwesome} icon={faCheckCircle} color='golden' />
                            <div>
                                <h4 className='text-2xl'>React</h4>
                                <small className='font-thin'>Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>

                {/* END OF FRONTEND */}

                <div className={styles.backendContainer}>
                    <h1 className='flex justify-center items-center pt-5 font-bold text-2xl'>Backend Development</h1>

                    <div className={styles.frontendContent}>
                        <article className={styles.frontendDetails}>
                            <FontAwesomeIcon className={styles.experienceFontAwesome} icon={faCheckCircle} color='golden' />
                            <div>
                                <h4 className='text-2xl'>NodeJS</h4>
                                <small className='font-thin'>Experienced</small>
                            </div>
                        </article>
                        <article className={styles.frontendDetails}>
                            <FontAwesomeIcon className={styles.experienceFontAwesome} icon={faCheckCircle} color='golden' />
                            <div>
                                <h4 className='text-2xl'>ExpressJS</h4>
                                <small className='font-thin'>Experienced</small>
                            </div>
                        </article>
                        <article className={styles.frontendDetails}>
                            <FontAwesomeIcon className={styles.experienceFontAwesome} icon={faCheckCircle} color='golden' />
                            <div>
                                <h4 className='text-2xl'>MongoDB</h4>
                                <small className='font-thin'>Experienced</small>
                            </div>
                        </article>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;