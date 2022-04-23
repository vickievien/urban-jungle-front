import React, {useEffect, useState} from 'react';
import '../../css/App.css';
import '../../css/home.css';

const FeaturedMainComponent = () => {
    const [featuredPlant, setFeaturedPlant] = useState({})
    const getFeaturedPlantFunction = async() => {
        const getFeaturedResponse = await fetch('https://urban-jungle-back.herokuapp.com/plants/')
        const getFeaturedPlantData = await getFeaturedResponse.json();
        setFeaturedPlant(getFeaturedPlantData.data[getFeaturedPlantData.data.length-1]);
    }

    const [showDetail, setShowDetail] = useState(false)
    const featuredDetail = document.querySelector('.featured-detail')

    const toggleDetailFunction = () => {
        setShowDetail(!showDetail)
        // featuredDetail.classList.toggle('active')
    }

    useEffect(getFeaturedPlantFunction, [])

    return(
        <main className='featured-content-section'>
            <div className='featured-img-container'>
                <img className="featured-img" src={featuredPlant ? featuredPlant.img : ""}/>
            </div>
            <section className='featured-text-container'>
                <p className='featured-subtitle'>Featured listing</p>
                <h3 className='featured-plant-title'>{featuredPlant ? featuredPlant.plantName : ""} the {featuredPlant ? featuredPlant.plantType : ""}</h3>
                <h4 className={`featured-detail ${showDetail ? 'active': 'deactivate'}`}>This {featuredPlant ? featuredPlant.plantType : ""} requires {featuredPlant ? featuredPlant.lightLevel : ""} {featuredPlant ? featuredPlant.lightType : ""} light
                <p className='featured-price'>${featuredPlant ? Number(featuredPlant.price).toFixed(2) : ""}</p>
                </h4>
                {showDetail ? 
                <a className='homepage-button' onClick={toggleDetailFunction}>Close details</a>
                : 
                <a className='homepage-button' onClick={toggleDetailFunction}>View details</a>
                }                
            </section>
        </main>

    )
}

export default FeaturedMainComponent;