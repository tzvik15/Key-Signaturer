(this.webpackJsonpkeysig=this.webpackJsonpkeysig||[]).push([[0],{20:function(e,t,a){e.exports=a(34)},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(16),i=a.n(r),s=(a(25),a(26),a(4)),l=a(10),c=a(36);a(27);var m=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"body"},o.a.createElement("h2",{className:"hAndW"},"Hello and Welcome!"),o.a.createElement("p",{className:"p"},"This application will help you learn and practice the steps to determining the key signature of every scale! To begin, please choose if you would like to learn the process, or test your knowledge."),o.a.createElement(c.a,{className:"btn"},o.a.createElement(s.b,{to:"/learn"},"Learn")),o.a.createElement(c.a,{className:"btnP"},o.a.createElement(s.b,{to:"/play"},"Play"))))},h=a(3),u=a(9);a(33);var d=function(){var e=Object(n.useState)({q1:!1,major:!1,q2:!1,isCorF:!1,q3:!1,hasFlat:!1}),t=Object(u.a)(e,2),a=t[0],r=t[1];function i(){r(Object(h.a)({},a,{major:!0,q1:!0}))}function l(){r({q1:!1,major:!1,q2:!1,isCorF:!1,q3:!1,hasFlat:!1})}function c(){console.log(a)}return!1===a.q1?o.a.createElement(o.a.Fragment,null,o.a.createElement("h3",{className:"head"},"This step by step guide will help you find the key signature to any scale by following a simple, step-by-step series of questions, with minimal need for memorization!"),o.a.createElement("h2",{className:"head"},"Question 1"),o.a.createElement("p",null,"Is it a Major key or Minor key?"),o.a.createElement("button",{lassName:"ansBut",onClick:c},"current state"),o.a.createElement("button",{lassName:"ansBut",onClick:i},"Major"),o.a.createElement("button",{lassName:"ansBut",onClick:function(){r(Object(h.a)({},a,{major:!1,q1:!0}))}},"Minor")):!0===a.q1&&!0===a.major&&!1===a.q2?o.a.createElement(o.a.Fragment,null,o.a.createElement("h3",{className:"head"},"Now that we have a major scale, it's time to ask ourselves the 2nd question: is it C major or F major?"),o.a.createElement("button",{lassName:"ansBut",onClick:function(){r(Object(h.a)({},a,{isCorF:!0,q2:!0}))}},"Yes"),o.a.createElement("button",{lassName:"ansBut",onClick:function(){r(Object(h.a)({},a,{q2:!0}))}},"No")):!0===a.q1&&!0===a.q2&&!0===a.isCorF?o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"C and F major are the only two scales that we need to memorize the key signature for. C major has NO key signature (no sharps and no flats), and F major only has Bb in its key signature."),o.a.createElement("h4",null,"Once you are done memorizing, click the button!"),o.a.createElement("button",{className:"ansBut",onClick:l},o.a.createElement(s.b,{to:"/"},"DONE!"))):!0===a.q1&&!0===a.q2&&!1===a.isCorF&&!1===a.q3?o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:"head"},'Now we are ready to ask the final question: does the name of the scale have the word "flat" (or the symbol "b") in it? Examples that have it are Bb, Ab, Db. Examples that don\'t are F#, G#, A, B.'),o.a.createElement("button",{className:"ansBut",onClick:function(){r(Object(h.a)({},a,{hasFlat:!0,q3:!0}))}},"Yes it does!"),o.a.createElement("button",{className:"ansBut",onClick:function(){r(Object(h.a)({},a,{hasFlat:!1,q3:!0}))}},"No it doesn't!"),o.a.createElement("button",{className:"ansBut",onClick:c},"current state")):!0===a.q1&&!0===a.q2&&!0===a.q3&&!0===a.hasFlat?o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"If the scale has the word \"flat\" in it's name, (and it isn't C or F major), then we know it will have flats in it's key signature. Now we must determine which flats it has. To do so, we must first make sure we know the order of flats. Flats appear in a specific order, which is: B,E,A,D,G,C,F. It is suggested you memorize the order of sharps and flats. Here is a mnemonic device to help: Boromir Eats Arrows, Dies. Gollum Captures Frodo."),o.a.createElement("p",null,"Once we know the order of flats, we simply go down the order until we find the scale name we are looking for (note for this that the order is referring to flats. This means that B = B flat, E = E flat, etc.). Once we arrived at the target note, we simply add one more flat (by order), and those flats are the key signature for that scale."),o.a.createElement("h3",{className:"head"},"Example:"),o.a.createElement("p",null,"We are looking at the scale of Db major. Going down the order of flats until we match, we get B,E,A,D. Then, adding one more by order leads us to B,E,A,D,G, and those are the flats that are in the key signature of Db major (and it's relative minor, Bb minor)."),o.a.createElement("button",{className:"ansBut",onClick:l},o.a.createElement(s.b,{to:"/"},"Got It!"))):!0===a.q1&&!0===a.q2&&!0===a.q3&&!1===a.hasFlat?o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"If the scale does not have the word \"flat\" in it's name, (and it isn't C or F major), then we know it will have sharps in it's key signature. Now we must determine which sharps it has. To do so, we must first make sure we know the order of sharps. sharps appear in a specific order, which is: F, C, G, D, A, E, B. It is suggested you memorize the order of sharps and flats. Here is a mnemonic device to help: Frodo Can Go Down And Eat Breakfast."),o.a.createElement("p",null,'Once we know the order of sharps, we need to go a "minor second" interval below our scale name (a minor second is half a step, and one note name change). This will give us another note (so a minor second below G is F#, a minor second below C is B, etc.). Once we found this new name, we go down the order of sharps until we hit a match with this new name, and those are the sharps in the key signature for that scale.'),o.a.createElement("h3",{className:"head"},"Example:"),o.a.createElement("p",null,"We are looking at the scale of A major. Going down a minor second brings us to G#. We then go down the order of sharps until we hit a match, we get F, C, G, and those are the sharps that are in the key signature of A major (and it's relative minor, F# minor)."),o.a.createElement("button",{className:"ansBut",onClick:l},o.a.createElement(s.b,{to:"/"},"Got It!"))):!0===a.q1&&!1===a.major?o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,'When searching for the key signature of a minor scale, first we must find the "relative major" of it. A minor scale shares the same key signature of its relative major. '),o.a.createElement("p",null,'To find the relative major, we must move up a "minor third" interval from the original scale name. A minor third interval is defined as a change of 1.5 steps, and TWO note names. This means that first we must determine what will be the note name of the target scale. The note name order is: C, D, E, F, G, A, B, C. So, first we must find our original, minor scale note name (disregarding for the moment and "b" or "#" signs attached to it), and move up 2 names from it.'),o.a.createElement("p",null,'Next, we need to determine if the new note name (the one that is 2 above the original) has and "b" or "#" signs. To do that, we look at the 2nd part of finding a relative major: the 1.5 steps. Once we know the relative major\'s name, we need to account for the distance: we go back to the original, minor scale name (this time including any "b" or "#"), and we go up 1.5 steps from it. (C + 1.5 = D#, C# + 1.5 = E, Bb + 1.5 = C#, etc.) Once we have determined which sounding note is exactly 1.5 steps above our starting note, we then need to reconcile this note with the name we found in the previous step. This means that we must use "b" and "#" signs to make the note name we arrived in at step 1 SOUND like the note we arrived in at step two. Remember, 2 notes can sound the same but have different names (for example F# sounds like Gb). Also remember that there is a half step between B to C, and between E to F. '),o.a.createElement("p",null,"Here is a complete example of this process: original scale is G minor. Going up 2 note names brings us to B. We go up a step and a half from G to get A#/Bb. Looking at those two options, since we know the note name needs to be B, we choose Bb as the final note, meaning that the relative major to G minor is Bb major."),o.a.createElement("h3",{className:"head"},"Found your relative major? AWESOME! Click the button when you are ready."),o.a.createElement("button",{className:"ansBut",onClick:i},"FOUND IT!"),o.a.createElement("button",{className:"ansBut",onClick:c},"current state")):o.a.createElement("button",{className:"ansBut",onClick:c},"current state")};var f=function(){var e=["C Major","A Minor","F Major","D Minor","Bb Major","G Minor","Eb Major","C Minor","Ab Major","F Minor","Db Major","Bb Minor","Gb Major","Eb Minor","Cb Major","Ab Minor","G Major","E Minor","D Major","B Minor","A Major","F# Minor","E Major","C# Minor","B Major","G# Minor","F# Major","D# Minor","C# Major","A# Minor"],t=Object(n.useState)({yes:0,no:0}),a=Object(u.a)(t,2),r=a[0],i=a[1],l=Object(n.useState)(""),c=Object(u.a)(l,2),m=c[0],d=c[1],f=Object(n.useState)(""),b=Object(u.a)(f,2),E=b[0],w=b[1],p=Object(n.useState)({start:!1}),j=Object(u.a)(p,2),M=j[0],g=j[1];Object(n.useEffect)((function(){C()}),[m]);var k=function(e){e.target.innerText===E?(i(Object(h.a)({},r,{yes:r.yes+1})),y()):i(Object(h.a)({},r,{no:r.no+1})),y()},y=function(){var t=e[Math.floor(Math.random()*e.length)];d(t)},C=function(){"C Major"===m?w("A Minor"):"F Major"===m?w("D Minor"):"Bb Major"===m?w("G Minor"):"Eb Major"===m?w("C Minor"):"Ab Major"===m?w("F Minor"):"Db Major"===m?w("Bb Minor"):"Gb Major"===m?w("Eb Minor"):"Cb Major"===m?w("Ab Minor"):"G Major"===m?w("E Minor"):"D Major"===m?w("B Minor"):"A Major"===m?w("F# Minor"):"E Major"===m?w("C# Minor"):"B Major"===m?w("G# Minor"):"F# Major"===m?w("D# Minor"):"C# Major"===m?w("A# Minor"):"A Minor"===m?w("C Major"):"D Minor"===m?w("F Major"):"G Minor"===m?w("Bb Major"):"C Minor"===m?w("Eb Major"):"F Minor"===m?w("Ab Major"):"Bb Minor"===m?w("Db Major"):"Eb Minor"===m?w("Gb Major"):"Ab Minor"===m?w("Cb Major"):"E Minor"===m?w("G Major"):"B Minor"===m?w("D Major"):"F# Minor"===m?w("A Major"):"C# Minor"===m?w("E Major"):"G# Minor"===m?w("B Major"):"D# Minor"===m?w("F# Major"):"A# Minor"===m?w("C# Major"):console.log("here")};return!1===M.start?o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"In this section you will be given a random scale name, and you will need to select the relative minor/major"),o.a.createElement("button",{onClick:function(){g({start:!0}),y()}},"READY!")):o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"What is the relative scale of the following scale?"),o.a.createElement("h3",null,m),e.sort().map((function(e){return o.a.createElement("button",{onClick:k},e)})),o.a.createElement("div",null,o.a.createElement("h1",null,"Correct Answers: ",r.yes),o.a.createElement("h1",null,"Incorrect Answers: ",r.no)),o.a.createElement("button",null,o.a.createElement(s.b,{to:"/"},"HOME")))};var b=function(){return o.a.createElement(o.a.Fragment,null,"sharps")};var E=function(){return o.a.createElement(o.a.Fragment,null,"flats")};var w=function(){return o.a.createElement(o.a.Fragment,null,"quiz")};var p=function(){var e=Object(n.useState)({choice:!1,rk:!1,sk:!1,fk:!1,qy:!1}),t=Object(u.a)(e,2),a=t[0],r=t[1];return!1===a.choice?o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,'Welcome to the play section of this app! Here you will have the opportunity to test your abilities and the things you have learned! You can practice specific topics, or try the "quiz yourself" section that includes all kinds of questions!'),o.a.createElement("button",{onClick:function(){r(Object(h.a)({},a,{rk:!0,choice:!0}))}},"Relative Keys"),o.a.createElement("button",{onClick:function(){r(Object(h.a)({},a,{sk:!0,choice:!0}))}},"Sharp Keys"),o.a.createElement("button",{onClick:function(){r(Object(h.a)({},a,{fk:!0,choice:!0}))}},"Flat Keys"),o.a.createElement("button",{onClick:function(){r(Object(h.a)({},a,{qy:!0,choice:!0}))}},"Quiz Yourself!")):!0===a.choice&&!0===a.rk?o.a.createElement(f,null):!0===a.choice&&!0===a.sk?o.a.createElement(b,null):!0===a.choice&&!0===a.fk?o.a.createElement(E,null):!0===a.choice&&!0===a.qy?o.a.createElement(w,null):o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"Click the button to return to the main menu."),o.a.createElement("button",{onClick:function(){r({choice:!1,rk:!1,sk:!1,fk:!1,qy:!1})}},o.a.createElement(s.b,{to:"/"},"HOME")))};var j=function(){return o.a.createElement(s.a,null,o.a.createElement(l.a,{exact:!0,path:"/",component:m}),o.a.createElement(l.a,{exact:!0,path:"/learn",component:d}),o.a.createElement(l.a,{exact:!0,path:"/play",component:p}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.23536eba.chunk.js.map