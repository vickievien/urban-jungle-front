import React, {useState} from 'react';
import '../css/App.css';
import '../css/contact.css';
import ContactLinksContainerComponent from './contactLinksContainerComponent';



const ContactContentComponent = () => {

  return (
    <section className="contact-section">
      <h1 className='contact-title'>We want to hear from you!</h1>
      <p className='contact-caption'>We're new around the block and always looking to make this community better. We would love your feedback or if you want to drop in and say hi, we'd love that, too! We appreciate all the support so far.
      <span className='contact-signature'>- The Urban Jungle Team</span>
      </p>
      <ContactLinksContainerComponent />
    </ section>
  );
}

export default ContactContentComponent;
