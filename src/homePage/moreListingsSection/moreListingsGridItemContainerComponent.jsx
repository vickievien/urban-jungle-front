import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import '../../css/App.css';
import '../../css/home.css';



const MoreListingsGridItemContainerComponent = () => {

    const [plants, setPlants] = useState([]);

    const getRandThreePlantsFunction = async () => {
        try {
            const getPlantsResponse = await fetch('https://urban-jungle-back.herokuapp.com/plants/');
            const getPlantsData = await getPlantsResponse.json();
    
            let arr = [];
            let threePlantArr = [];
            while(arr.length < 3) {
                let r = Math.floor(Math.random() * (getPlantsData.data.length));
                if (arr.indexOf(r) === -1) {
                    arr.push(r)
                    threePlantArr.push(getPlantsData.data[r])
                }
            }
            setPlants(threePlantArr);
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(getRandThreePlantsFunction, [])
    const plantCards = plants.map(plant => {
        
        return (
          <article className='grid-item-container' key={plant? plant._id : ""} >
            <div className='card-img-container'>
                <Link to="/plants">
                    <img className="card-img homepage" src={plant? plant.img : ""} alt={plant? plant.plantType : ""} />
                </Link>
            </div>
            <div className='card-basic-info-container' >
              <h2 className='card-basic-info-plantType' >{plant? plant.plantType : ""}</h2>
              <p className='card-basic-info-price' >${plant? plant.price.toFixed(2) : ""}</p>
            </div>
          </article>
        )
    })

    return(
        <>
            {plantCards}
        </>
    )
}

export default MoreListingsGridItemContainerComponent;