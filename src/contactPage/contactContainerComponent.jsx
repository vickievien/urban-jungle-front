import React, {useState} from 'react';
import '../css/App.css';
import '../css/contact.css';
import FooterComponent from '../footer/footer';
import NavContainerComponent from '../nav/navContainerComponent';
import ContactContentComponent from './contactContentComponent';


const ContactContainerComponent = () => {

  return (
    <section className='contact-container'>
        <NavContainerComponent />
        <ContactContentComponent />
        <FooterComponent />
    </ section>
  );
}

export default ContactContainerComponent;
