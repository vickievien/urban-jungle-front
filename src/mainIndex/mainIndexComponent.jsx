import React, {useState, useEffect} from 'react';
import '../App.css';
import NavContainerComponent from './nav/navContainerComponent';
import NewFormContainerComponent from './newForm/newFormContainerComponent';
import ShowGridContainerComponent from './showGrid/showGridContainerComponent';


const MainIndexComponent = () => {
  // SET ALL STATES AKA VARIABLES HERE:
  const [plants, setPlants] = useState([]);

  // SET STATE FOR TOGGLE NEW LISTING MODAL FORM (TRICKLE SETSTATE TO WHEREVER FORM IS)
  const [showing, setShowing] = useState(false);
  
  // SET STATE FOR TOGGLE CARD MODAL SO DELETE FUNCTION CAN USE IT HERE
  const [cardShowing, setCardShowing] = useState(false);

  // SET ERROR USE STATE
  const [plantServerError, setPlantServerError] = useState("");

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
      const getPlantsResponse = await fetch('http://localhost:3001/plants/');
      const getPlantsData = await getPlantsResponse.json();
      // console.log(getPlantsData);
      setPlants(getPlantsData.data);
    } catch (error) {
      
    }
  }

  // FUNCTION TO CREATE NEW PLANTS
  const createNewPlantFunction = async (newPlant) => {
    const postNewPlantResponse = await fetch('http://localhost:3001/plants/', {
      method: "POST",
      body: JSON.stringify(newPlant),
      headers: {
        "Content-type": "application/json"
      }
    });
    const newPlantData = await postNewPlantResponse.json();
    console.log(newPlantData);

    if(newPlantData.success === true) {
      setPlants([newPlantData.data, ...plants]);
    }else {
      setPlantServerError(newPlantData.data);
    }

  }

  // FUNCTION TO DELETE PLANTS
  const deletePlantFunction = async(deletePlantId) => {
    try {
      console.log('clicking delete plant function listening')
      const deletePlantResponse = await fetch(`http://localhost:3001/plants/${deletePlantId}/`, {
      method: "DELETE"
    });
    const deletePlantData = await deletePlantResponse.json();
    console.log(deletePlantData);
    if(deletePlantData.success === true) {
      const newPlants = plants.filter(n => n._id !== deletePlantId);
      setPlants(newPlants);
    }else {
      // DO SOMETHING HERE
    }
    } catch (error) {
      // console.log(error)
    }
    toggleCardShowingFunction()
    // console.log(cardShowing);
  }


  // FUNCTION TO UPDATE PLANTS

  // USE EFFECT FOR INDEX
  useEffect(getPlantsFunction, []);

  return (
    <main className="main-index">
      <NavContainerComponent toggleShowingFunction={toggleShowingFunction}/>
        {/* HOLD FOR HERO */}
        <NewFormContainerComponent showing={showing} toggleShowingFunction={toggleShowingFunction} createNewPlantFunction={createNewPlantFunction}/>
        <ShowGridContainerComponent plants={plants} toggleCardShowingFunction={toggleCardShowingFunction} cardShowing={cardShowing} deletePlantFunction={deletePlantFunction} />

        <a className="back-to-top" href="#">Back to top</a>
    </main>
  );
}

export default MainIndexComponent;
