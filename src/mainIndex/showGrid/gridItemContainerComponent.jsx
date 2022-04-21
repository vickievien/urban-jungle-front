import React from 'react';
import '../../css/App.css';


const GridItemContainerComponent = (props) => {
  
  
  const plantCards = props.plants.map(plant => {
    // console.log(plant._id);
    return (
      <article className='grid-item-container' key={plant._id} onClick={() => props.getOnePlantInfoFunction(plant._id)}>
        <img className="card-img" src={plant? plant.img : ""} alt={plant? plant.plantType : ""} />
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
