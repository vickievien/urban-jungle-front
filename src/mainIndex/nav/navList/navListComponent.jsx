import React from 'react';
import '../../../App.css';
import NavItemsComponent from './navItems/navItemsComponent';

const NavListComponent = (props) => {
  return (
    <ul className='nav-list'>
        <NavItemsComponent />
    </ul>
  );
}

export default NavListComponent;
