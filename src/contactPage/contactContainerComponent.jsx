import React, {useState} from 'react';
import '../css/App.css';
import FooterComponent from '../footer/footer';
import NavContainerComponent from '../nav/navContainerComponent';


const ContactContainerComponent = () => {

  return (
    <section className='contact-container'>
        <NavContainerComponent />
        <h1>CONTACT PAGE</h1>
        <FooterComponent />
    </ section>
  );
}

export default ContactContainerComponent;
