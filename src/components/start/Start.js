import React from "react";
import {Button} from "reactstrap";
import { Link } from "react-router-dom";

function Start() {
    return (
        <>
        <p><h2>Hello and Welcome!</h2></p>
        <p>This application will help you learn and practice the steps to determining the key signature of every scale! To begin, please choose if you would like to learn the process, or test your knowledge.</p>
        <Button className="btn" ><Link to="/learn">Learn</Link></Button>
        <Button className="btn">Play</Button>
   
        
        
        
        {/* <Button><Link className="btn" to="/play">Test</Link></Button> */}

        </>
    )

}

export default Start;