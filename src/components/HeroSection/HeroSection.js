import React from 'react';
import '../../App.css';
import './HeroSection.css';
import Button from '../Button/Button';

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="videos/video-1.mp4" autoPlay loop muted />
      <h2>Hi, I&rsquo;m Ahmet</h2>
      <p>Full Stack Web Developer</p>
      {/* <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Get Started
        </Button>
      </div> */}
    </div>
  );
}

export default HeroSection;
