import React from 'react';
import '../App.css';
import './HeroSection.css';
import { Button } from './Button';

function HeroSection() {
    return (
        <div className='hero-container'>
          <video src="/images/video-1.mp4" autoPlay loop muted/>
            <h1>Esther Child Integrated Program</h1>
            <p>Community based organization in Meru Kenya</p><br/>
         <div className="hero-btns"> 
         <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
            Know more 
         </Button>
         <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
            Donate
         </Button>
         </div>
        </div>
    )
}

export default HeroSection
