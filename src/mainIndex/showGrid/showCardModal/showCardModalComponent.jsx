import React, {useState} from 'react';
import '../../../App.css';
import EditFormModalContainerComponent from './editFormModal/editFormModalContainerComponent';



const ShowCardModalComponent = (props) => {

    const [editFormShowing, setEditFormShowing] = useState(false);

    const toggleEditFormShowingFunction = () => {
        setEditFormShowing(!editFormShowing);
    }

    return (
        <article className='card-modal-container-for-card'>
            <img className="card-modal-img" src={props.onePlantInfo? props.onePlantInfo.img : ""} alt={props.onePlantInfo? props.onePlantInfo.plantType : ""} />
            <section className='card-modal-side-text-container'>
                <div className='card-modal-detail-wrapper'>
                    <p className='card-modal-property'>plant name:</p>
                    <h4 className='card-modal-value'>{props.onePlantInfo.plantName}</h4>
                </div>

                <div className='card-modal-detail-wrapper'>
                    <p className='card-modal-property'>species:</p>
                    <h4 className='card-modal-value'>{props.onePlantInfo.plantType}</h4>
                </div>

                <div className='card-modal-detail-wrapper'>
                    <p className='card-modal-property'>price:</p>
                    <h4 className='card-modal-value'>${props.onePlantInfo.price}</h4>
                </div>
            </section>

            <section className='card-modal-bottom-text-container'>
                <div className='card-modal-detail-wrapper'>
                    <p className='card-modal-property'>description:</p>
                    <h4 className='card-modal-value'>{props.onePlantInfo.description}</h4>
                </div>
                <div className='card-modal-detail-wrapper'>
                    <p className='card-modal-property'>contact seller:</p>
                    <h4 className='card-modal-value'>{props.onePlantInfo.email}</h4>
                </div>
                <div className='card-modal-detail-wrapper card-modal-button-container'>
                    <a className='button edit-button' onClick={toggleEditFormShowingFunction}>Edit</a>

                    <EditFormModalContainerComponent toggleEditFormShowingFunction={toggleEditFormShowingFunction} editFormShowing={editFormShowing} />


                    <a className='button delete-button' onClick={() => {props.deletePlantFunction(props.onePlantInfo._id)}}>Delete</a>
                </div>


            </section>

        </article>
    );
}

export default ShowCardModalComponent;
