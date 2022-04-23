import React, {useState} from 'react';
import '../../css/App.css';
import FilterContainerComponent from './filter/filterContainerComponent';
import GridItemContainerComponent from './gridItemContainerComponent';
import ShowCardModalContainerComponent from './showCardModal/showCardModalContainerComponent';


const ShowGridContainerComponent = (props) => {

  const [onePlantInfo, setOnePlantInfo] = useState({})
  const getOnePlantInfoFunction = async(plantId) => {
    try {
      const getOnePlantInfoResponse = await fetch(`https://urban-jungle-back.herokuapp.com/plants/${plantId}`);
      const getOnePlantInfoData = await getOnePlantInfoResponse.json();
      setOnePlantInfo(getOnePlantInfoData.data);
      props.toggleCardShowingFunction();
    } catch (error) {
      console.log(error)
    }
  }

  const [showFilter, setShowFilter] = useState(false)
  const toggleFilterFormFunction = () => {
    setShowFilter(!showFilter)
  }

  // SET USE STATE FOR NEW PLANT 
  const [filterInputs, setFilterInputs] = useState([]);

  // FUNCTION TO GRAB VALUES WHEN INPUT CHANGES
  const handleInputChangeFunction = (e) => {
      setFilterInputs({
          ...filterInputs,
          [e.target.name]: e.target.value
      })

      // console.log(filterInputs)
  }

  const [runFilter, setRunFilter] = useState(false)

  const submitFilterFunction = async(e) => {
    e.preventDefault()
    setRunFilter(true)  
  }


  return (
    <>
      <div className='browse-filter-container'>
        <h3 className="browse-text">Browse Listings</h3>
        <h4 className="filter-section-title">Filter By Location <i className="far fa-caret-square-down drop-down" onClick={toggleFilterFormFunction}></i></h4>
      </div>

      {showFilter ? 
      < FilterContainerComponent filterInputs={filterInputs} setFilterInputs={setFilterInputs} handleInputChangeFunction={handleInputChangeFunction} submitFilterFunction={submitFilterFunction} setRunFilter={setRunFilter}/>
      :
      ""
      }
      
      <div className='show-grid-container'>
        <GridItemContainerComponent plants={props.plants}  getOnePlantInfoFunction={getOnePlantInfoFunction} filterInputs={filterInputs} runFilter={runFilter}/>
      </div>

      {props.cardShowing ? 
      <ShowCardModalContainerComponent toggleCardShowingFunction={props.toggleCardShowingFunction} onePlantInfo={onePlantInfo} deletePlantFunction={props.deletePlantFunction} toggleEditFormShowingFunction={props.toggleEditFormShowingFunction} editFormShowing={props.editFormShowing} updatePlantFunction={props.updatePlantFunction} plants={props.plants}  setPlants={props.setPlants}  />
      : ""}

    </>
  );
}

export default ShowGridContainerComponent;
