import React, {useState} from "react";
import { Link } from "react-router-dom";
import Relative from "../relative/Relative"
import Sharps from "../sharps/Sharps"
import Flats from "../flats/Flats"
import Quiz from "../quiz/Quiz"

function Play() {

    const [choiceState, setChoiceState] = useState({
        choice:false,
        rk: false,
        sk: false,
        fk: false,
        qy: false
    })

    function relative() {
        setChoiceState({...choiceState, rk:true, choice:true})
    }

    function sharps() {
        setChoiceState({...choiceState, sk:true, choice:true})
    }

    function flats() {
        setChoiceState({...choiceState, fk:true, choice:true})
    }

    function quiz() {
        setChoiceState({...choiceState, qy:true, choice:true})
    }

    function reset() {
        setChoiceState({   choice:false, rk: false,
            sk: false,
            fk: false,
            qy: false})
    }


    return (
        choiceState.choice===false?
        <>
        <p>Welcome to the play section of this app! Here you will have the opportunity to test your abilities and the things you have learned! You can practice specific topics, or try the "quiz yourself" section that includes all kinds of questions!</p>
        <button onClick={relative}>Relative Keys</button>
        <button onClick={sharps}>Sharp Keys</button>
        <button onClick={flats}>Flat Keys</button>
        <button onClick={quiz}>Quiz Yourself!</button>
        </>
        :
        choiceState.choice===true && choiceState.rk===true?
        <Relative />
        :
        choiceState.choice===true && choiceState.sk===true?
        <Sharps />
        :
        choiceState.choice===true && choiceState.fk===true?
        <Flats />
        :
        choiceState.choice===true && choiceState.qy===true?
        <Quiz />
        :
        <>
        <p>Click the button to return to the main menu.</p>
        <button onClick={reset}><Link to="/">HOME</Link></button>
        </>
    )
}

export default Play;