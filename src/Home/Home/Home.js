import React from 'react';
import styles from './Home.module.css'
const Home = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>
                    Raiyan Kabir
                </h1>
                <h1 className={styles.heroSubtitle}>
                    Web Developer
                </h1>


            </div>
        </div>
    );
};

export default Home;