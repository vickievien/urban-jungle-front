import React from 'react';
import '../../../../App.css';
import EditFormModalComponent from './editFormModalComponent';



const EditFormModalContainerComponent = (props) => {
  return (
    <>
    {props.editFormShowing ?
      <div className='edit-form-container'>
        <a className='form-close edit-form-close' onClick={props.toggleEditFormShowingFunction}><i className="fas fa-times"></i></a>
        <EditFormModalComponent  toggleEditFormShowingFunction={props.toggleEditFormShowingFunction}  />
      </div>
    : "" }
    </>
    );
}

export default EditFormModalContainerComponent;
