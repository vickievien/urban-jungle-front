import React, {useState} from 'react';
import '../../css/App.css';


const GridItemContainerComponent = (props) => {
  
  let reverseArr = []

  for (let i=props.plants.length-1; i>=0; i--) {
    reverseArr.push(props.plants[i])
  }

  const plantCards = reverseArr.map(plant => {
        return (
          
          props.runFilter ?

            // props.filterInputs.plantType ? props.filterInputs.plantType === plant.plantType : null
            // && 
            // props.filterInputs.price ? props.filterInputs.price === plant.price : null
            // &&
            // props.filterInputs.lightType ? props.filterInputs.lightType === plant.lightType : null
            // &&
            // props.filterInputs.lightLevel ? props.filterInputs.lightLevel === plant.lightLevel : null
            // &&
            // props.filterInputs.maintenance ? props.filterInputs.maintenance === plant.maintenance : null
            // &&
            // props.filterInputs.location ? props.filterInputs.location === plant.location : null ?

            props.filterInputs.location.toLowerCase() === plant.location.toLowerCase() ?
            
              <article className='grid-item-container' key={plant? plant._id : ""} onClick={() => props.getOnePlantInfoFunction(plant._id)}>
                <div className='card-img-container'>
                  <img className="card-img" src={plant? plant.img : ""} alt={plant? plant.plantType : ""} />
                </div>
                <div className='card-basic-info-container' >
                  <h2 className='card-basic-info-plantType' >{plant? plant.plantType : ""}</h2>
                  <p className='card-basic-info-price' >${plant? plant.price.toFixed(2) : ""}</p>
                </div>
              </article>

            :
            ""

          :

          <article className='grid-item-container' key={plant? plant._id : ""} onClick={() => props.getOnePlantInfoFunction(plant._id)}>
            <div className='card-img-container'>
              <img className="card-img" src={plant? plant.img : ""} alt={plant? plant.plantType : ""} />
            </div>
            <div className='card-basic-info-container' >
              <h2 className='card-basic-info-plantType' >{plant? plant.plantType : ""}</h2>
              <p className='card-basic-info-price' >${plant? plant.price.toFixed(2) : ""}</p>
            </div>
          </article>

        )
  })


  
  return (
    <>
      {plantCards}
    </>
  );
}

export default GridItemContainerComponent;





