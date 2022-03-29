import React from 'react';
import '../../../../App.css';

// showing={showing} toggleShowingFunction={toggleShowingFunction}

const NavItemsComponent = (props) => {
  return (
    <>
        <li className='nav-item'>
            <a className='nav-item-link button create-button' onClick={props.toggleShowingFunction}>Add listing</a>
        </li>
        <li className='nav-item'>
            <a className='nav-item-link' href="#">Explore</a>
        </li>
        <li className='nav-item'>
            <a className='nav-item-link' href="#">API</a>
        </li>
    </>
  );
}

export default NavItemsComponent;
