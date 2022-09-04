import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Experience from '../../Experience/Experience';
import Loading from '../../Shared/Loading';
import Banner from '../Banner/Banner';
import Projects from '../Projects';

const Home = () => {

    // Set Loading state to true initially
    // const [loading, setLoading] = useState(true)

    // useEffect(() => {
    // Loading function to load data or
    // fake it using setTimeout;
    //     const loadData = async () => {

    //         // Wait for two second
    //         await new Promise((r) => setTimeout(r, 2000))

    //         // Toggle loading state
    //         setLoading((loading) => !loading)
    //     }

    //     loadData()
    // }, [])

    //     if (loading) {
    //         return <Loading />
    //     }
    // else{}
    return (
        <div>
            <Banner />
            <Projects />
            <Experience />
        </div>
    );
};

export default Home;