import React from 'react';
import Experience from '../../Experience/Experience';
import Banner from '../Banner/Banner';
import Projects from '../Projects';

const Home = () => {
    return (
        <div>
            <Banner />
            <Projects />
            <Experience />
        </div>
    );
};

export default Home;