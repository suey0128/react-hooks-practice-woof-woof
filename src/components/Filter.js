import React, { useState } from "react";

function Filter ({ isFilterOn, isFilterOnSetter }) {


    console.log("outter", isFilterOn)

    // const filterHandler = () => {
    //     //render the DOM
    //     isFilterOnSetter(!isFilterOn);

    //     //update the display name 
    // }

return (
    <div id="filter-div">
        { isFilterOn ? 
            <button onClick ={(e) => {isFilterOnSetter(!isFilterOn)}} 
                    id="good-dog-filter">Filter good dogs: ON</button> :
            <button onClick ={(e) => {isFilterOnSetter(!isFilterOn)}} 
                    id="good-dog-filter">Filter good dogs: OFF</button> 
        }
    </div>
)
}

export default Filter;