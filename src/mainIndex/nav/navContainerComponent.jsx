import React from 'react';
import '../../App.css';
import NavListComponent from './navList/navListComponent';
import NavLogoComponent from './navLogoComponent';

const NavContainerComponent = (props) => {
  return (
    <header>
        <nav className='nav-container'>
          <NavLogoComponent />
          <NavListComponent />
        </nav>
    </header>
  );
}

export default NavContainerComponent;
