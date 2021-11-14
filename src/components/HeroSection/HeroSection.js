import React from 'react';
import '../../App.css';
import './HeroSection.css';
import Button from '../Button/Button';

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="videos/video-1.mp4" autoPlay loop muted />
      <h1>Welcome</h1>
      <p>Come checkout my projects</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
