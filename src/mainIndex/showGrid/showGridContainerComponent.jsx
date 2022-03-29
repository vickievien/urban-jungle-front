import React, {useState} from 'react';
import '../../App.css';
import GridItemContainerComponent from './gridItemContainerComponent';
import ShowCardModalContainerComponent from './showCardModal/showCardModalContainerComponent';


const ShowGridContainerComponent = (props) => {

  const [cardShowing, setCardShowing] = useState(false);

  const toggleCardShowingFunction = () => {
    setCardShowing(!cardShowing);
    // console.log('clicking')
  }

  const [onePlantInfo, setOnePlantInfo] = useState({})
  
  const getOnePlantInfoFunction = async(e) => {
    try {
      const getOnePlantInfoResponse = await fetch(`http://localhost:3001/plants/${e.target.name}`);
      const getOnePlantInfoData = await getOnePlantInfoResponse.json();
      console.log(e.target.name);
      console.log(getOnePlantInfoData);
      setOnePlantInfo(getOnePlantInfoData.data);
  
      toggleCardShowingFunction();
    } catch (error) {
      
    }
  }

  return (
    <>
      <div className='show-grid-container'>
        <GridItemContainerComponent plants={props.plants} toggleCardShowingFunction={toggleCardShowingFunction} getOnePlantInfoFunction={getOnePlantInfoFunction} />
      </div>
      {cardShowing ? 
      <ShowCardModalContainerComponent />
      : ""}
    </>
  );
}

export default ShowGridContainerComponent;
