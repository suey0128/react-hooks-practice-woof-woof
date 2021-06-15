import React from "react";

function DogBar ({ onDogBarClick, dogArr, isFilterOn }) {

    const filteredDogArr = dogArr.filter((dog) => dog.isGoodDog === true)

    return (
        <div id="dog-bar"> 
        {/* display the dog name with the updated dogArr */}
        {isFilterOn ? 
        filteredDogArr.map((dog)=> <span key={dog.id} onClick={(e)=>onDogBarClick(dog.id)}>{dog.name}</span>) :
        dogArr.map((dog)=> <span key={dog.id} onClick={(e)=>onDogBarClick(dog.id)}>{dog.name}</span>)
        }
        </div>
    )
}

export default DogBar;