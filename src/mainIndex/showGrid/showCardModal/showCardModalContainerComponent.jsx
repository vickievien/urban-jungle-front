import React, {useState} from 'react';
import '../../../App.css';
import ShowCardModalComponent from './showCardModalComponent';




const ShowCardModalContainerComponent = (props) => {

  const [updatePlant, setUpdatePlant] = useState({
    plantType: props.onePlantInfo.plantType,
    plantName: props.onePlantInfo.plantName,
    price: props.onePlantInfo.price,
    img: props.onePlantInfo.img,
    description: props.onePlantInfo.description,
    email: props.onePlantInfo.email,
    _id: props.onePlantInfo._id
  });

  return (
    <div className='card-modal-container'>
      <a className='form-close card-modal-close' onClick={props.toggleCardShowingFunction}><i className="fas fa-times"></i></a>
      <ShowCardModalComponent toggleCardShowingFunction={props.toggleCardShowingFunction} onePlantInfo={props.onePlantInfo} deletePlantFunction={props.deletePlantFunction} updatePlantFunction={props.updatePlantFunction} updatePlant={updatePlant} setUpdatePlant={setUpdatePlant} plants={props.plants}  setPlants={props.setPlants}  />
    </div>
  );
}

export default ShowCardModalContainerComponent;
