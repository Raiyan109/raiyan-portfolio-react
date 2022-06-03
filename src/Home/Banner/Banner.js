import React from 'react';
import styles from './Banner.module.css'
import videoBg from '../../assets/videos/videoBg.mp4'

const Banner = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.overlay}></div>
            <video src={videoBg} autoPlay loop muted></video>
            <div className={styles.heroContent}>

                <div className={styles.heroTitle}>
                    <h1>
                        Raiyan Kabir
                    </h1>
                    <h3>Web Developer</h3>
                    <button className={styles.heroButton}>Download Resume</button>
                </div>
                <h1 className={styles.heroSubtitle}>

                </h1>


            </div>
        </div>
    );
};

export default Banner;