import React, { useEffect } from 'react';
import '../App.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div>
            <Navbar />
            <h1 className='contact'>Contact</h1>
            <Footer />
        </div>
    )
}

export default Contact