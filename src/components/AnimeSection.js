import React from 'react';
import { Button } from './Button';
import '../App.css';
import './AnimeSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='videos/video-2.mp4' autoPlay loop muted/>
        <h1>Welcome To The Site!</h1>
        <p>Let's get started</p>
        <div className='hero-btns'>
            <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large'>
                Get Started
            </Button>
            <Button className="btns" buttonStyle='btn--primary' buttonSize='btn--large'>
                Watch Trailer <i className='far fa-play-circle'/>
            </Button>
        </div>
    </div>
  )
}

export default HeroSection