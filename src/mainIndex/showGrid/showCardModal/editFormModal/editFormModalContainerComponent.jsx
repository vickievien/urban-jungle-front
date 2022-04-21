import React from 'react';
import '../../../../css/App.css';
import EditFormModalComponent from './editFormModalComponent';



const EditFormModalContainerComponent = (props) => {
  return (
    <>
    {props.editFormShowing ?
      <div className='edit-form-container'>
        <a className='form-close edit-form-close' onClick={props.toggleEditFormShowingFunction}><i className="fas fa-times"></i></a>
        <EditFormModalComponent  toggleEditFormShowingFunction={props.toggleEditFormShowingFunction} onePlantInfo={props.onePlantInfo} updatePlantFunction={props.updatePlantFunction} updatePlant={props.updatePlant} setUpdatePlant={props.setUpdatePlant} plants={props.plants}  setPlants={props.setPlants}  />
      </div>
    : "" }
    </>
    );
}

export default EditFormModalContainerComponent;
