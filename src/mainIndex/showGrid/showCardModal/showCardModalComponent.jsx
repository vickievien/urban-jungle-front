import React from 'react';
import '../../../App.css';



const ShowCardModalComponent = (props) => {
  return (
    <article className='card-modal-container-for-card'>
        <img className="card-modal-img" src={props.onePlantInfo? props.onePlantInfo.img : ""} alt={props.onePlantInfo? props.onePlantInfo.plantType : ""} />
        <section className='card-modal-side-text-container'>
            <div className='card-modal-detail-wrapper'>
                <p className='card-modal-property'></p>
                <h4 className='card-modal-value'></h4>
            </div>
        </section>
        <section className='card-modal-bottom-text-container'>

        </section>
    </article>
    );
}

export default ShowCardModalComponent;
