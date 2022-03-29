import React from 'react';
import '../../../App.css';
import NavItemsComponent from './navItems/navItemsComponent';

const NavListComponent = (props) => {
  return (
    <ul className='nav-list'>
        <NavItemsComponent showing={props.showing} toggleShowingFunction={props.toggleShowingFunction} />
    </ul>
  );
}

export default NavListComponent;
