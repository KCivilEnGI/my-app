import React, { useEffect } from 'react';
import '../App.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function SignUp() {

  useEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div>
      <Navbar />
      <h1 className='sign-up'>Sign Up</h1>
      <Footer />
    </div>
  )
}

export default SignUp