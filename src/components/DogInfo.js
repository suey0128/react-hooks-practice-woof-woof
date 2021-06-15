import React, {useState} from "react";

function DogInfo ({ name, id, image, isGoodDog, dogArr, dogArrSetter }) {

    const [isGoodDogStatus, isGoodDogStatusSetter] = useState(isGoodDog)
    console.log(isGoodDog)

    const isGoodDogBtnHandler = (id) => {

        //PATCH 
        fetch(`http://localhost:3001/pups/${id}`, {
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({isGoodDog:(!isGoodDogStatus)})
            })
             .then(res => res.json())
            .then(data => console.log(data) )
            .catch(error => console.error('Error:', error))
        
        //display on DOM
        isGoodDogStatusSetter(!isGoodDogStatus);

    }


    return (
        <div>
            <img src={image} alt={name} height="250"/>
            <h2>{name}</h2>
            {isGoodDogStatus ? 
            <button onClick={(e)=>{isGoodDogBtnHandler(id)}}>Good Dog!</button > 
            : 
            <button onClick={(e)=>{isGoodDogBtnHandler(id)}}>Bad Dog!</button>}
        </div>
    )

}

export default DogInfo;