import React from 'react';
import '../App.css';
import NavContainerComponent from './nav/navContainerComponent';


const MainIndexComponent = () => {
  // SET STATE FOR TOGGLE NEW LISTING MODAL FORM (TRICKLE SETSTATE TO WHEREVER FORM IS)
  // CREATE FUNCTION TO TOGGLE SHOW/HIDE NEW LISTING FORM (TRICKLE FUNCTION TO NAV ITEMS)

  return (
    <main class="main-index">
      <NavContainerComponent/>
        <h1 class="main-title-holder">URBAN JUNGLE HOLDER</h1>
    </main>
  );
}

export default MainIndexComponent;
