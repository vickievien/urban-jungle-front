import React, {useState} from 'react';
import '../../../../css/App.css';



const EditFormModalComponent = (props) => {

  const handleInputChangeFunction = (e) => {
    props.setUpdatePlant({
      ...props.updatePlant,
      [e.target.name]: e.target.value
    })
  }

  const submitUpdatePlantFunction = (e) => {
    e.preventDefault();
    props.updatePlantFunction(props.updatePlant);
    // const newPlantsWithUpdates = props.plants.map(n => n._id === props.plantToUpdate._id ? props.plantToUpdate : n);
    // props.setPlants(newPlantsWithUpdates)
    props.toggleEditFormShowingFunction();
  }

  return (
    <form className='form-container edit-form' onSubmit={submitUpdatePlantFunction}>

    <div className='form-input-container'>
      <label htmlFor="plantType">Type of Plant:</label>
      <input type="text" onChange={handleInputChangeFunction} name="plantType" value={props.updatePlant.plantType} required />
    </div>

    <div className='form-input-container'>
      <label htmlFor="plantName">Plant Name:</label>
      <input type="text" onChange={handleInputChangeFunction} name="plantName" value={props.updatePlant.plantName}  />
    </div>

    <div className='form-input-container'>
      <label htmlFor="price">Price:</label>
      <input type="number" onChange={handleInputChangeFunction} name="price" value={props.updatePlant.price} required />
    </div>

    <div className='form-input-container'>
      <label htmlFor="img">Image:</label>
      <input type="text" onChange={handleInputChangeFunction} name="img" value={props.updatePlant.img} required />
    </div>

    <div className="form-input-container">
        <label htmlFor="light-type">Light Type:</label>
        <div className="radio-row-container">
          <div className="radio-option-container">
            <input type="radio" name="lightType" value="indirect" onChange={handleInputChangeFunction} />
            <label htmlFor="light-type-indirect">Indirect</label>
          </div>
          <div className="radio-option-container">
            <input type="radio" name="lightType" value="direct" onChange={handleInputChangeFunction} />
            <label htmlFor="light-type-direct">Direct</label>
          </div>
        </div>
      </div>

      <div className="form-input-container">
        <label htmlFor="light-level">Light Level:</label>
        <div className="radio-row-container">
          <div className="radio-option-container">
            <input type="radio" name="lightLevel" value="low" onChange={handleInputChangeFunction} />
            <label htmlFor="light-level-low">Low</label>
          </div>
          <div className="radio-option-container">
            <input type="radio" name="lightLevel" value="medium" onChange={handleInputChangeFunction} />
            <label htmlFor="light-level-med">Medium</label>
          </div>
          <div className="radio-option-container">
            <input type="radio" name="lightLevel" value="high" onChange={handleInputChangeFunction} />
            <label htmlFor="light-level-high">High</label>
          </div>
        </div>
      </div>

      <div className="form-input-container">
        <label htmlFor="maintenance">Maintenance Level:</label>
        <div className="radio-row-container">
          <div className="radio-option-container">
            <input type="radio" name="maintenance" value="low" onChange={handleInputChangeFunction} />
            <label htmlFor="maintenance-low">Low</label>
          </div>
          <div className="radio-option-container">
            <input type="radio" name="maintenance" value="medium" onChange={handleInputChangeFunction} />
            <label htmlFor="maintenance-med">Medium</label>
          </div>
          <div className="radio-option-container">
            <input type="radio" name="maintenance" value="high" onChange={handleInputChangeFunction} />
            <label htmlFor="maintenance-high">High</label>
          </div>
        </div>
      </div>

    <div className='form-input-container'>
      <label htmlFor="description">Description:</label>
      <textarea type="text" onChange={handleInputChangeFunction} name="description" value={props.updatePlant.description} />
    </div>

    <div className='form-input-container'>
      <label htmlFor="email">Contact Email:</label>
      <input type="email" onChange={handleInputChangeFunction} name="email" value={props.updatePlant.email} />
    </div>

    <div className='form-input-container'>
      <label htmlFor="location">Location:</label>
      <input type="text" onChange={handleInputChangeFunction} name="location" value={props.updatePlant.location} />
    </div>

    <input className='submit' type="submit" value="Submit changes" />
  </form>


    );
}

export default EditFormModalComponent;
