import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/App.css';
import '../../css/home.css';
import MoreListingsGridItemContainerComponent from './moreListingsGridItemContainerComponent';


const MoreListingsContainerComponent = () => {
    



    return(
        <section className='more-listings-section'>
            <h3 className="browse-text">View Listings</h3>
            <section className='show-grid-container'>
                <MoreListingsGridItemContainerComponent />
            </section>
            <Link to="/plants" className='homepage-button'>All listings</Link>
        </section>
    )
}

export default MoreListingsContainerComponent;