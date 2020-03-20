import React, {useState} from "react";
import { Link } from "react-router-dom";




function Learn() {

    const [state, setState] = useState({
        q1:false,
        major: false,
        q2:false,
        isCorF:false,
        q3:false,
        hasFlat:false
    })

function minor() {
    setState({...state, major:false, q1:true})
}

function major() {
    setState({...state, major: true, q1:true})
}

function cOrF() {
    setState({...state, isCorF: true, q2:true})
}

function q2f() {
    setState({...state,  q2:true})
}



function flat() {
    setState({...state, hasFlat: true})
}

function reset() {
    setState({q1:false,
        major: false,
        q2:false,
        isCorF:false,
        q3:false,
        hasFlat:false})
}

function log() {
    console.log(state)
}





    return (
       
        
        
        state.q1===false && state.q2===false? 
        <>
        <h3>This step by step guide will help you find the key signature to any scale by following a simple, step-by-step series of questions, with minimal need for memorization!</h3>
        <h2>Question 1</h2>
        <p>Is it a Major key or Minor key?</p>
        <button onClick={log}>current state</button>
        <button onClick={major}>Major</button>
        <button onClick={minor}>Minor</button>
        </>

        : 
        state.q1===true && state.major===true && state.q2===false?
        <>
        <h3>Now that we have a major scale, it's time to ask ourselves the 2nd question: is it C major or F major?</h3>
        <button onClick={cOrF}>Yes</button>
        <button onClick={q2f}>No</button>
        </>
        :
        state.q1===true && state.q2===true?
        <>
        <p>C and F major are the only two scales that we need to memorize the key signature for. C major has NO key signature (no sharps and no flats), and F major only has Bb in its key signature.</p>
        <h4>Once you are done memorizing, click the button!</h4>
        <button onClick={reset}><Link to="/">DONE!</Link></button>
        </>




        :
        <>
        <p>When searching for the key signature of a minor scale, first we must find the "relative major" of it. A minor scale shares the same key signature of its relative major. </p>
        <p>To find the relative major, we must move up a "minor third" interval from the original scale name. A minor third interval is defined as a change of 1.5 steps, and TWO note names. This means that first we must determine what will be the note name of the target scale. The note name order is: C, D, E, F, G, A, B, C. So, first we must find our original, minor scale note name (disregarding for the moment and "b" or "#" signs attached to it), and move up 2 names from it.</p>
        <p>Next, we need to determine if the new note name (the one that is 2 above the original) has and "b" or "#" signs. To do that, we look at the 2nd part of finding a relative major: the 1.5 steps. Once we know the parallel major's name, we need to account for the distance: we go back to the original, minor scale name (this time including any "b" or "#"), and we go up 1.5 steps from it. (C + 1.5 = D#, C# + 1.5 = E, Bb + 1.5 = C#, etc.) Once we have determined which sounding note is exactly 1.5 steps above our starting note, we then need to reconcile this note with the name we found in the previous step. This means that we must use "b" and "#" signs to make the note name we arrived in at step 1 SOUND like the note we arrived in at step two. Remember, 2 notes can sound the same but have different names (for example F# sounds like Gb). Also remember that there is a half step between B to C, and between E to F. </p>
        <p>Here is a complete example of this process: original scale is G minor. Going up 2 note names brings us to B. We go up a step and a half from G to get A#/Bb. Looking at those two options, since we know the note name needs to be B, we choose Bb as the final note, meaning that the parralel major to G minor is Bb major.</p>
        <h3>Found your parralel major? AWESOME! Click the button when you are ready.</h3>
        <button onClick={major}>FOUND IT!</button>
        <button onClick={log}>current state</button>       
        </>
         
    )
}

export default Learn;