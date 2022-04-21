import React from 'react';
import '../../css/App.css';
import NewFormInputsComponent from './newFormInputsComponent';


const NewFormContainerComponent = (props) => {
  return (
    <>
    {props.showing ?
      <div className='new-form-container'>
        <a className='form-close new-form-close' onClick={props.toggleShowingFunction}><i className="fas fa-times"></i></a>
        <NewFormInputsComponent createNewPlantFunction={props.createNewPlantFunction} toggleShowingFunction={props.toggleShowingFunction}  />
      </div>
    : "" }
    </>
  );
}

export default NewFormContainerComponent;
