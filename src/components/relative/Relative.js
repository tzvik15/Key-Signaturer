import React, {useState} from "react";

function Relative() {

    const scales = ["C Major", "A Minor", "F Major", "D Minor", "Bb Major", "G Minor", "Eb Major", "C Minor", "Ab Major", "F Minor", "Db Major", "Bb Minor", "Gb Major", "Eb Minor", "Cb Major", "Ab Minor", "G Major", "E Minor", "D Major", "B Minor", "A Major", "F# Minor", "E Major", "C# Minor", "B Major", "G# Minor", "F# Major", "D# Minor", "C# Major", "A# Minor"]

    const [rand, setRand] = useState("");

    const [correct, setCorrect] = useState("");

    const [play, setPlay] = useState({
        start:false
    })

    const start=()=> {
        setPlay({start:true})
        random();
        answer();
    }

    const selected=(event)=> {
        console.log(typeof(event.target.innerText))
        console.log(correct)
        if (event.target.innerText === correct) {
            console.log("YES!");
            random();
        } else console.log("no");
        random();
    }

    const random=()=>{

       let rand1 = scales[Math.floor(Math.random() * scales.length)];
       setRand(rand1);
        answer(); 
    }

    const test=()=> {
        console.log(correct)
    }

    const answer=()=>{

        rand==="C Major" ?
            setCorrect("A Minor")
        :
        rand==="F Major" ?
            setCorrect("D Minor")
        :
        rand==="Bb Major" ?
            setCorrect("G Minor")
        :
        rand==="Eb Major" ?
            setCorrect("C Minor")
        :
        rand==="Ab Major" ?
            setCorrect("F Minor")
        :
        rand==="Db Major" ?
            setCorrect("Bb Minor")
        :
        rand==="Gb Major" ?
            setCorrect("Eb Minor")
        :
        rand==="Cb Major" ?
            setCorrect("Ab Minor")
        :
        rand==="G Major" ?
            setCorrect("E Minor")
        :
        rand==="D Major" ?
            setCorrect("B Minor")
        :
        rand==="A Major" ?
            setCorrect("F# Minor")
        :
        rand==="E Major" ?
            setCorrect("C# Minor")
        :
        rand==="B Major" ?
            setCorrect("G# Minor")
        :
        rand==="F# Major" ?
            setCorrect("D# Minor")
        :
        rand==="C# Major" ?
            setCorrect("A# Minor")
        :
        rand==="A Minor" ?
            setCorrect("C Major")
        :
        rand==="D Minor" ?
            setCorrect("F Major")
        :
        rand==="G Minor" ?
            setCorrect("Bb Major")
        :
        rand==="C Minor" ?
            setCorrect("Eb Major")
        :
        rand==="F Minor" ?
            setCorrect("Ab Major")
        :
        rand==="Bb Minor" ?
            setCorrect("Db Major")
        :
        rand==="Eb Minor" ?
            setCorrect("Gb Major")
        :
        rand==="Ab Minor" ?
            setCorrect("Cb Major")
        :
        rand==="E Minor" ?
            setCorrect("G Major")
        :
        rand==="B Minor" ?
            setCorrect("D Major")
        :
        rand==="F# Minor" ?
            setCorrect("A Major")
        :
        rand==="C# Minor" ?
            setCorrect("E Major")
        :
        rand==="G# Minor" ?
            setCorrect("B Major")
        :
        rand==="D# Minor" ?
            setCorrect("F# Major")
        :
        rand==="A# Minor" ?
            setCorrect("C# Major")
        
        :
        console.log("here")
        

    }


    return (

        play.start===false?
        <>
        <p>In this section you will be given a random scale name, and you will need to select the relative minor/major</p>
        <button onClick={start}>READY!</button>
        </>
        :
        <>
        <p>What is the relative scale of the following scale?</p>
        
        <h3>{rand}</h3>
        <button onClick={test}>test</button>
        {scales.sort().map((item) => (
            <button onClick={selected}>{item }</button>


        ))}
        </>
    )
}

export default Relative;