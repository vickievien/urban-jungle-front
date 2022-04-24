import React, {useState} from 'react';
import '../css/App.css';



const ContactLinksContainerComponent = () => {

  return (
    <div className="contact-icon-container">
        <p className="connect">
            <a href="mailto:" target="_blank">
                <i className="contact-link far fa-envelope"></i></a>E-mail
        </p>                                        
        <p className="connect">
            <a href="" target="_blank"><i className="contact-link fab fa-twitter"></i></a>Twitter
        </p>
        <p className="connect">
            <a href="" target="_blank"><i className="contact-link fab fa-facebook"></i></a>Facebook
        </p>
        <p className="connect">
            <a href="" target="_blank"><i className="contact-link fab fa-instagram"></i></a>Instagram
        </p>
    </div>
  );
}

export default ContactLinksContainerComponent;
