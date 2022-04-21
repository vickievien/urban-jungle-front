import React from 'react';
import '../css/App.css';
import { Link } from 'react-router-dom';

const NavLogoComponent = () => {
  return (
    <Link to="/" className='nav-logo-link' >
        <img className='nav-logo' src="/../../../urban-jungle-logo.png" alt="logo-holder" />
    </Link>
  );
}

export default NavLogoComponent;
