import React from 'react';
import '../../../css/App.css';
import { Link } from 'react-router-dom';

// showing={showing} toggleShowingFunction={toggleShowingFunction}

const NavItemsComponent = (props) => {
  return (
    <>
        <li className='nav-item'>
            <a className='nav-item-link button create-button' onClick={props.toggleShowingFunction}>Add listing</a>
        </li>
        <li className='nav-item'>
          <Link className='nav-item-link' to="/">Home</Link>
        </li>
        <li className='nav-item'>
            <Link className='nav-item-link' to="/plants">Listings</Link>
        </li>
        <li className='nav-item'>
            <Link className='nav-item-link' to="/contact">Contact</Link>
        </li>
    </>
  );
}

export default NavItemsComponent;
