import React, { useEffect } from 'react';
import '../App.css';
import AnimeSection from '../components/AnimeSection';
import Cards from '../components/Cards';
import Footer from '../components/Footer';

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <>
            <AnimeSection />
            <Cards />
            <Footer />
        </>
    )
}

export default Home;