import React, { useState } from "react";

const FilterContainerComponent = (props) => {

    const clearFunction = () => {
        const inputs = document.querySelectorAll('.filter-form-input');
        inputs.forEach(n=> {
            n.value = "";
        })
        const radioButtons = document.querySelectorAll('.filter-form-input.radio'); 
        
        radioButtons.forEach(n => {
            n.checked = "";
        })

        props.setRunFilter(false);
    }


    return(
        <section className="filter-section">
            <form className='form-container' onSubmit={props.submitFilterFunction}>

            {/* <div className='form-input-container'>
                <label htmlFor="plantType">Type of Plant:</label>
                <input className="filter-form-input" type="text" name="plantType" onChange={props.handleInputChangeFunction} />
            </div>

            <div className='form-input-container'>
                <label htmlFor="price">Price:</label>
                <input className="filter-form-input" type="number" name="price" onChange={props.handleInputChangeFunction} />
            </div>

            <div className="form-input-container">
                <label htmlFor="light-type">Light Type:</label>
                <div className="radio-row-container">
                    <div className="radio-option-container">
                    <input className="filter-form-input radio" type="radio" name="lightType" value="indirect" onChange={props.handleInputChangeFunction} />
                    <label htmlFor="light-type-direct">Indirect</label>
                    </div>
                    <div className="radio-option-container">
                    <input className="filter-form-input radio" type="radio" name="lightType" value="direct" onChange={props.handleInputChangeFunction} />
                    <label htmlFor="light-type-direct">Direct</label>
                    </div>
                </div>
            </div>

            <div className="form-input-container">
                <label htmlFor="light-level">Light Level:</label>
                <div className="radio-row-container">
                    <div className="radio-option-container">
                    <input className="filter-form-input radio" type="radio" name="lightLevel" value="low" onChange={props.handleInputChangeFunction} />
                    <label htmlFor="light-level-high">Low</label>
                    </div>
                    <div className="radio-option-container">
                    <input className="filter-form-input radio" type="radio" name="lightLevel" value="medium" onChange={props.handleInputChangeFunction} />
                    <label htmlFor="light-level-med">Medium</label>
                    </div>
                    <div className="radio-option-container">
                    <input className="filter-form-input radio" type="radio" name="lightLevel" value="high" onChange={props.handleInputChangeFunction} />
                    <label htmlFor="light-level-high">High</label>
                    </div>
                </div>
            </div>

            <div className="form-input-container">
                <label htmlFor="course">Maintenance Level:</label>
                <div className="radio-row-container">
                    <div className="radio-option-container">
                    <input className="filter-form-input radio" type="radio" name="maintenance" value="low" onChange={props.handleInputChangeFunction} />
                    <label htmlFor="maintenance-low">Low</label>
                    </div>
                    <div className="radio-option-container">
                    <input className="filter-form-input radio" type="radio" name="maintenance" value="medium" onChange={props.handleInputChangeFunction} />
                    <label htmlFor="maintenance-med">Medium</label>
                    </div>
                    <div className="radio-option-container">
                    <input className="filter-form-input radio" type="radio" name="maintenance" value="high" onChange={props.handleInputChangeFunction} />
                    <label htmlFor="maintenance-high">High</label>
                    </div>
                </div>
            </div>

            <div className='form-input-container'>
                <label htmlFor="location">Location:</label>
                <input className="filter-form-input" type="text" name="location" onChange={props.handleInputChangeFunction} />
            </div> */}

            <input className="filter-form-input location" type="text" name="location" onChange={props.handleInputChangeFunction} placeholder="e.g. Los Angeles"/>

            <div className='form-input-container filter-form-buttons-container'>
                <a className="clear-button" onClick={clearFunction}>Clear</a>
                <input className='filter submit' type="submit" value="Submit" />
            </div>

            </form>            
            
        </section>    
    )
}

export default FilterContainerComponent;