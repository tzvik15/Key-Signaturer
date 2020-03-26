import React from "react";
import {Button} from "reactstrap";
import { Link } from "react-router-dom";
import "../start/start.css"

function Start() {
    return (
        <>
        <div className ="start">
        <h2 className = "hAndW">Hello and Welcome!</h2>
        <p className ="p">This application will help you learn and practice the steps to determining the key signature of every scale! To begin, please choose if you would like to learn the process, or test your knowledge.</p>
        <Button className="btn" ><Link to="/learn">Learn</Link></Button>

        <Button className="btnP"><Link to="/play">Play</Link></Button>

        </div>
      


        </>
    )

}

export default Start;