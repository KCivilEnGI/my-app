import React, {useEffect} from 'react';
import '../App.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div>
      <Navbar />
      <h1 className='about'>About Us</h1>
      <Footer />
    </div>
  )
}

export default About