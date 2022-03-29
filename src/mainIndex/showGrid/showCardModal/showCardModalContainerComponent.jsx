import React from 'react';
import '../../../App.css';
import ShowCardModalComponent from './showCardModalComponent';



const ShowCardModalContainerComponent = (props) => {
  return (
    <div className='card-modal-container'>
      <a className='form-close card-modal-close' onClick={props.toggleCardShowingFunction}><i className="fas fa-times"></i></a>
      <ShowCardModalComponent toggleCardShowingFunction={props.toggleCardShowingFunction} onePlantInfo={props.onePlantInfo} />
    </div>
  );
}

export default ShowCardModalContainerComponent;
