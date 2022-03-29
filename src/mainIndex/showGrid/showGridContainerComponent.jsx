import React from 'react';
import '../../App.css';
import GridItemContainerComponent from './gridItemContainerComponent';


const ShowGridContainerComponent = (props) => {
  return (
    <div className='show-grid-container'>
        <GridItemContainerComponent plants={props.plants}/>
    </div>
  );
}

export default ShowGridContainerComponent;
