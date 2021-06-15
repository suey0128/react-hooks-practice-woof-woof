import React from "react";
import DogInfo from "./DogInfo"

function DogContainer ({ displayDog, dogArr, dogArrSetter }) {

console.log("displayonDC", displayDog)

    return (
        <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        {displayDog === "" ? 
        null  :
        <DogInfo name={displayDog.name} 
                id={displayDog.id}
                image={displayDog.image} 
                isGoodDog={displayDog.isGoodDog} 
                dogArr={dogArr} 
                dogArrSetter={dogArrSetter}/>
        }

      </div>
    )

}

export default DogContainer;