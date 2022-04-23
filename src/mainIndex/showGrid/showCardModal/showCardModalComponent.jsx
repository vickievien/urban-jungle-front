import React, {useState} from 'react';
import '../../../css/App.css';
import EditFormModalContainerComponent from './editFormModal/editFormModalContainerComponent';



const ShowCardModalComponent = (props) => {
    const [editFormShowing, setEditFormShowing] = useState(false);

    const toggleEditFormShowingFunction = () => {
        setEditFormShowing(!editFormShowing);
    }

    const [showSeller, setShowSeller] = useState(false)

    const toggleSellerInfoFunction = () => {
        setShowSeller(!showSeller)
    }

    return (
        <article className='card-modal-container-for-card'>
            <img className="card-modal-img" src={props.updatePlant? props.updatePlant.img : ""} alt={props.updatePlant? props.updatePlant.plantType : ""} />
            <section className='card-modal-side-text-container'>
                <div className='card-modal-detail-wrapper'>
                    <p className='card-modal-property'>plant name:</p>
                    <h4 className='card-modal-value'>{props.updatePlant.plantName}</h4>
                </div>

                <div className='card-modal-detail-wrapper'>
                    <p className='card-modal-property'>species:</p>
                    <h4 className='card-modal-value'>{props.updatePlant.plantType}</h4>
                </div>

                <div className='card-modal-detail-wrapper'>
                    <p className='card-modal-property'>price:</p>
                    <h4 className='card-modal-value'>${props.updatePlant.price}</h4>
                </div>

                <div className='card-modal-detail-wrapper'>
                    <p className='card-modal-property'>light:</p>
                    <h4 className='card-modal-value'>{props.updatePlant.lightType}</h4>
                </div>

                <div className='card-modal-detail-wrapper'>
                    <p className='card-modal-property'>light level:</p>
                    <h4 className='card-modal-value'>{props.updatePlant.lightLevel}</h4>
                </div>

                <div className='card-modal-detail-wrapper'>
                    <p className='card-modal-property'>maintenance level:</p>
                    <h4 className='card-modal-value'>{props.updatePlant.maintenance}</h4>
                </div>
            </section>

            <section className='card-modal-bottom-text-container'>
                <div className='card-modal-detail-wrapper'>
                    <p className='card-modal-property'>description:</p>
                    <h4 className='card-modal-value'>{props.updatePlant.description}</h4>
                </div>

                {showSeller?
                <div className='card-modal-detail-wrapper'>
                    <p className='card-modal-property'>contact seller:</p>
                    <h4 className='card-modal-value'>{props.updatePlant.email}</h4>
                </div>
                :
                <a className="button edit-button" onClick={toggleSellerInfoFunction}>Contact Seller</a>
                }
                
                
                <div className='card-modal-detail-wrapper card-modal-button-container'>
                    <a className='button edit-button' onClick={toggleEditFormShowingFunction}>Edit</a>

                    <EditFormModalContainerComponent toggleEditFormShowingFunction={toggleEditFormShowingFunction} editFormShowing={editFormShowing} onePlantInfo={props.onePlantInfo} updatePlantFunction={props.updatePlantFunction} updatePlant={props.updatePlant} setUpdatePlant={props.setUpdatePlant} plants={props.plants}  setPlants={props.setPlants}  />


                    <a className='button delete-button' onClick={() => {props.deletePlantFunction(props.onePlantInfo._id)}}>Delete</a>
                </div>


            </section>

        </article>
    );
}

export default ShowCardModalComponent;
