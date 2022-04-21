import React, {useEffect, useState} from 'react';
import '../../css/App.css';
import '../../css/home.css';

const FeaturedMainComponent = () => {
    const [featuredPlant, setFeaturedPlant] = useState({})
    const getFeaturedPlantFunction = async() => {
        const getFeaturedResponse = await fetch('https://urban-jungle-back.herokuapp.com/plants/')
        const getFeaturedPlantData = await getFeaturedResponse.json();
        console.log(getFeaturedPlantData.data)
        console.log(getFeaturedPlantData.data[getFeaturedPlantData.data.length-1])
        setFeaturedPlant(getFeaturedPlantData.data[getFeaturedPlantData.data.length-1]);
    }

    const [showDetail, setShowDetail] = useState(false)
    const featuredDetail = document.querySelector('.featured-detail')
    console.log(featuredDetail)

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
                <p className={`featured-detail ${showDetail ? 'active': 'deactivate'}`}>This {featuredPlant ? featuredPlant.plantType : ""} requires {featuredPlant ? featuredPlant.lightLevel : ""} {featuredPlant ? featuredPlant.lightType : ""} light
                <p className='featured-price'>${featuredPlant ? Number(featuredPlant.price).toFixed(2) : ""}</p>
                </p>
                {showDetail ? 
                <a className='featured-more-button' onClick={toggleDetailFunction}>Close details</a>
                : 
                <a className='featured-more-button' onClick={toggleDetailFunction}>View details</a>
                }                
            </section>
        </main>

    )
}

export default FeaturedMainComponent;