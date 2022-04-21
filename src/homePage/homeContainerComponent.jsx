import React, {useState} from 'react';
import '../css/App.css';
import '../css/home.css';
import FooterComponent from '../footer/footer';
import NavContainerComponent from '../nav/navContainerComponent';
import FeaturedContainerComponent from './featuredSection/featuredContainerComponent';
import HeroContainerComponent from './hero/heroContainerComponent';
import TextContainerComponent from './textSection/textContainerComponent';

const HomeContainerComponent = () => {

  return (
    <section className='home-container'>
        <NavContainerComponent />
        <HeroContainerComponent />
        <FeaturedContainerComponent />
        <TextContainerComponent />

        <FooterComponent />
    </ section>
  );
}

export default HomeContainerComponent;
