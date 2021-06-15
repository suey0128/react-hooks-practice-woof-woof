import React, { useState, useEffect } from "react";
import Filter from "./Filter"
import DogBar from "./DogBar"
import DogContainer from "./DogContainer"


function App() {

  //Arr that store the database 
  const [dogArr, dogArrSetter] = useState([])
  //the dog info that got display
  const [displayDog, displayDogSetter] = useState("")
  const [isFilterOn, isFilterOnSetter] = useState(false)

    //"GET", uodate dogArr with data that comes back
    useEffect(()=>{
      fetch("http://localhost:3001/pups")
      .then(res => res.json())
      .then(data => dogArrSetter(data) )
      .catch(error => console.error('Error:', error))
  }
  ,[])

  const onDogBarClick = (id) => {
    const needDisplayDog = dogArr.filter((dog)=> dog.id === id)
    displayDogSetter(needDisplayDog[0])
  }


  return (
    <div className="App">
      <Filter isFilterOn={isFilterOn}
              isFilterOnSetter={isFilterOnSetter}/>
      <DogBar isFilterOn={isFilterOn}
              dogArr={dogArr}
              onDogBarClick={onDogBarClick}/>
      <DogContainer displayDog={displayDog} dogArr={dogArr} dogArrSetter={dogArrSetter} />
    </div>
  );
}

export default App;
