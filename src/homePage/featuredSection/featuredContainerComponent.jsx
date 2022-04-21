import React, {useState} from 'react';
import '../../css/App.css';
import '../../css/home.css';
import FeaturedMainComponent from './featuredMainComponent';

const FeaturedContainerComponent = () => {
    return(
        <section className='featured-section'>
            <FeaturedMainComponent />
        </section>
    )
}

export default FeaturedContainerComponent;