// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe()
{
    function handleOnBlur(){
        console.log("Hey! Eyes on me!")
    }

    function handleOnFocus(){
        console.log("Good!")
    }

    return (
        <button onBlur={handleOnBlur} onFocus={handleOnFocus}>Eyes on me</button>
    )
}

export default EyesOnMe;