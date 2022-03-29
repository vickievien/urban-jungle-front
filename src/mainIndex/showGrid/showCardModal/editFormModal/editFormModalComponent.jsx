import React from 'react';
import '../../../../App.css';



const EditFormModalComponent = (props) => {
  return (
    <form className='form-container edit-form'>

    <div className='form-input-container'>
      <label htmlFor="plantType">Type of Plant:</label>
      <input type="text" name="plantType"  required />
    </div>

    <div className='form-input-container'>
      <label htmlFor="plantName">Plant Name:</label>
      <input type="text" name="plantName"  />
    </div>

    <div className='form-input-container'>
      <label htmlFor="price">Price:</label>
      <input type="number" name="price" required />
    </div>

    <div className='form-input-container'>
      <label htmlFor="img">Image:</label>
      <input type="text" name="img" required />
    </div>

    <div className='form-input-container'>
      <label htmlFor="description">Description:</label>
      <textarea type="text" name="description" />
    </div>

    <div className='form-input-container'>
      <label htmlFor="email">Contact Email:</label>
      <input type="email" name="email" required />
    </div>

    <input className='submit' type="submit" value="Submit" />
  </form>


    );
}

export default EditFormModalComponent;
