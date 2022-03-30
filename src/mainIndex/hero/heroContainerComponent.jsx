import React from 'react';
import '../../App.css';


const HeroContainerComponent = () => {
  return (
    <section className='hero-container'>
        <img className='hero-pic' src="https://i.imgur.com/SMMxAFy.jpg" alt="hero plant image" />
        <img className='hero-logo-overlay'/>
    </section>
  );
}

export default HeroContainerComponent;
