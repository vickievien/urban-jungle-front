import React, {useState} from 'react';
import '../../App.css';
import GridItemContainerComponent from './gridItemContainerComponent';
import ShowCardModalContainerComponent from './showCardModal/showCardModalContainerComponent';


const ShowGridContainerComponent = (props) => {

  
  const [onePlantInfo, setOnePlantInfo] = useState({})
  
  const getOnePlantInfoFunction = async(plantId) => {
    try {
      const getOnePlantInfoResponse = await fetch(`https://urban-jungle-back.herokuapp.com/plants/${plantId}`);
      const getOnePlantInfoData = await getOnePlantInfoResponse.json();
      // console.log(plantId);
      // console.log(getOnePlantInfoData);
      setOnePlantInfo(getOnePlantInfoData.data);
  
      props.toggleCardShowingFunction();
    } catch (error) {
      
    }
  }

  return (
    <>
      <h3 className="browse-text">Browse Listings</h3>
      <div className='show-grid-container'>
        <GridItemContainerComponent plants={props.plants}  getOnePlantInfoFunction={getOnePlantInfoFunction} />
      </div>
      {props.cardShowing ? 
      <ShowCardModalContainerComponent toggleCardShowingFunction={props.toggleCardShowingFunction} onePlantInfo={onePlantInfo} deletePlantFunction={props.deletePlantFunction} toggleEditFormShowingFunction={props.toggleEditFormShowingFunction} editFormShowing={props.editFormShowing} updatePlantFunction={props.updatePlantFunction} plants={props.plants}  setPlants={props.setPlants}  />
      : ""}
    </>
  );
}

export default ShowGridContainerComponent;
