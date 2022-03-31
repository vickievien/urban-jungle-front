import React, {useState} from 'react';
import '../../App.css';



const NewFormInputsComponent = (props) => {
  // SET USE STATE FOR NEW PLANT 
  const [newPlant, setNewPlant] = useState([]);

  // FUNCTION TO GRAB VALUES WHEN INPUT CHANGES
  const handleInputChangeFunction = (e) => {
    setNewPlant({
      ...newPlant,
      [e.target.name]: e.target.value
    })
  }

  // FUNCTION TO SUBMIT NEW PLANT TO TAKE BACK TO SET NEW PLANT INTO OG USE STATE
  const submitNewPlant = (e) => {
    e.preventDefault();
    props.createNewPlantFunction(newPlant);
    setNewPlant({
      plantType: "",
      plantName: "",
      price: 0,
      img: "",
      lightType: "",
      lightLevel: "",
      description: "",
      email: ""
    })
    props.toggleShowingFunction();
  }


  return (
    <form className='form-container new-form' onSubmit={submitNewPlant}>

      <div className='form-input-container'>
        <label htmlFor="plantType">Type of Plant:</label>
        <input type="text" name="plantType" onChange={handleInputChangeFunction} placeholder="e.g. Pothos" required />
      </div>

      <div className='form-input-container'>
        <label htmlFor="plantName">Plant Name:</label>
        <input type="text" name="plantName" onChange={handleInputChangeFunction} placeholder="e.g. Planty" />
      </div>

      <div className='form-input-container'>
        <label htmlFor="price">Price:</label>
        <input type="number" name="price" onChange={handleInputChangeFunction} placeholder="e.g. 12" required />
      </div>

      <div className='form-input-container'>
        <label htmlFor="img">Image:</label>
        <input type="text" name="img" onChange={handleInputChangeFunction} placeholder="e.g. https://i.imgur.com/761KWFI.jpg" required />
      </div>

      <div className="form-input-container">
        <label htmlFor="course">Light Type:</label>
        <div className="radio-row-container">
          <div className="radio-option-container">
            <input type="radio" name="lightType" value="indirect" onChange={handleInputChangeFunction} />
            <label htmlFor="course-main">Indirect</label>
          </div>
          <div className="radio-option-container">
            <input type="radio" name="lightType" value="direct" onChange={handleInputChangeFunction} />
            <label htmlFor="course-main">Direct</label>
          </div>
        </div>
      </div>

      <div className="form-input-container">
        <label htmlFor="course">Light Level:</label>
        <div className="radio-row-container">
          <div className="radio-option-container">
            <input type="radio" name="lightLevel" value="low" onChange={handleInputChangeFunction} />
            <label htmlFor="course-main">Low</label>
          </div>
          <div className="radio-option-container">
            <input type="radio" name="lightLevel" value="medium" onChange={handleInputChangeFunction} />
            <label htmlFor="course-main">Medium</label>
          </div>
          <div className="radio-option-container">
            <input type="radio" name="lightLevel" value="high" onChange={handleInputChangeFunction} />
            <label htmlFor="course-main">High</label>
          </div>
        </div>
      </div>

      <div className='form-input-container'>
        <label htmlFor="description">Description:</label>
        <textarea type="text" name="description" onChange={handleInputChangeFunction} placeholder="Description goes here" />
      </div>

      <div className='form-input-container'>
        <label htmlFor="email">Contact Email:</label>
        <input type="email" name="email" onChange={handleInputChangeFunction} placeholder="name@email.com" required />
      </div>

      <input className='submit' type="submit" value="Submit" />
    </form>
  );
}

export default NewFormInputsComponent;
