import React, {useState, useEffect} from 'react';
import '../css/App.css';
import FooterComponent from '../footer/footer';
import HeroContainerComponent from '../homePage/hero/heroContainerComponent';
import NavContainerComponent from '../nav/navContainerComponent';
import NewFormContainerComponent from './newForm/newFormContainerComponent';
import ShowGridContainerComponent from './showGrid/showGridContainerComponent';


const MainIndexComponent = () => {
  // SET ALL STATES AKA VARIABLES HERE:
  const [plants, setPlants] = useState([]);

  // SET ERROR USE STATE
  const [plantServerError, setPlantServerError] = useState("");

  // SET STATE FOR TOGGLE NEW LISTING MODAL FORM (TRICKLE SETSTATE TO WHEREVER FORM IS)
  const [showing, setShowing] = useState(false);
  
  // SET STATE FOR TOGGLE CARD MODAL SO DELETE FUNCTION CAN USE IT HERE
  const [cardShowing, setCardShowing] = useState(false);

  // CREATE FUNCTION TO TOGGLE SHOW/HIDE NEW LISTING FORM (TRICKLE FUNCTION TO NAV ITEMS)
  const toggleShowingFunction = () => {
    setShowing(!showing);
    // console.log('clicking')
  }

  // FUNCTION TO TOGGLE CARD MODAL
  const toggleCardShowingFunction = () => {
    setCardShowing(!cardShowing);
    // console.log(`clicking: ${cardShowing}`)
  }


  // FUNCTION TO GET PLANTS FOR INDEX DISPLAY (USE EFFECT)
  const getPlantsFunction = async () => {
    try {
      const getPlantsResponse = await fetch('https://urban-jungle-back.herokuapp.com/plants/');
      const getPlantsData = await getPlantsResponse.json();
      // console.log(getPlantsData);
      setPlants(getPlantsData.data);
    } catch (error) {
      
    }
  }

  // FUNCTION TO CREATE NEW PLANTS
  const createNewPlantFunction = async (newPlant) => {
    const postNewPlantResponse = await fetch('https://urban-jungle-back.herokuapp.com/plants/', {
      method: "POST",
      body: JSON.stringify(newPlant),
      headers: {
        "Content-type": "application/json"
      }
    });
    const newPlantData = await postNewPlantResponse.json();
    console.log(newPlantData);

    if(newPlantData.success === true) {
      setPlants([...plants, newPlantData.data]);
    }else {
      setPlantServerError(newPlantData.data);
    }
  }

  // FUNCTION TO DELETE PLANTS
  const deletePlantFunction = async(deletePlantId) => {
    // try {
      console.log('clicking delete plant function listening')
      const deletePlantResponse = await fetch(`https://urban-jungle-back.herokuapp.com/plants/${deletePlantId}/`, {
      method: "DELETE",
    });
    const deletePlantData = await deletePlantResponse.json();
    console.log(deletePlantData);
    if(deletePlantData.success === true) {
      const newPlants = plants.filter(n => n._id !== deletePlantId);
      setPlants(newPlants);
    }else {
      setPlantServerError(deletePlantData.data);
    }
    toggleCardShowingFunction()
  }

  // FUNCTION TO UPDATE PLANTS
  const updatePlantFunction = async(plantToUpdate) => {
    try {
      const updatePlantResponse = await fetch(`https://urban-jungle-back.herokuapp.com/plants/${plantToUpdate._id}`, {
        method: "PUT",
        body: JSON.stringify(plantToUpdate),
        headers: {
          "Content-type": "application/json"
        }
      });
      const updatePlantData = await updatePlantResponse.json();
      if(updatePlantData.success === true) {
        const newPlantsWithUpdates = plants.map(n => n._id === plantToUpdate._id ? plantToUpdate : n);
        setPlants(newPlantsWithUpdates);
      }else {
        setPlantServerError(updatePlantData.data);
      }  
    } catch (error) {
      console.log(error) 
    }
  }


  // USE EFFECT FOR INDEX
  useEffect(getPlantsFunction, []);

  return (
    <main className="main-index">
      <NavContainerComponent toggleShowingFunction={toggleShowingFunction}/>
      <NewFormContainerComponent showing={showing} toggleShowingFunction={toggleShowingFunction} createNewPlantFunction={createNewPlantFunction}/>
      <ShowGridContainerComponent setPlants={setPlants} plants={plants} toggleCardShowingFunction={toggleCardShowingFunction} cardShowing={cardShowing} deletePlantFunction={deletePlantFunction} updatePlantFunction={updatePlantFunction} />
      <a className="back-to-top" href="#">Back to top</a>
      <FooterComponent />
    </main>
  );
}

export default MainIndexComponent;
