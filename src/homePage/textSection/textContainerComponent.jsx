import React, {useState} from 'react';
import '../../css/App.css';
import '../../css/home.css';

const TextContainerComponent = () => {
    return(
        <section className='text-section'>
            <div className='text-seed-container'>
                <p className='text-section-quote q-line-one'>I don't need less plants...</p>            
                <p className='text-section-quote q-line-two'>I need more shelves.</p>
                <p className='text-section-quote q-line-three'>- Anonymous</p>            
                <div className='seed-container'>
                    <i className="fas fa-seedling seed-one"></i>
                    <i className="fas fa-seedling seed-two"></i>
                </div>
            </div>
        </section>
    )
}

export default TextContainerComponent;