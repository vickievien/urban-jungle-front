import React from 'react';
import '../css/App.css';
import NavListComponent from './navList/navListComponent';
import NavLogoComponent from './navLogoComponent';

const NavContainerComponent = (props) => {
  return (
    <header>
        <nav className='nav-container'>
          <NavLogoComponent />
          <NavListComponent showing={props.showing} toggleShowingFunction={props.toggleShowingFunction} />
        </nav>
    </header>
  );
}

export default NavContainerComponent;
