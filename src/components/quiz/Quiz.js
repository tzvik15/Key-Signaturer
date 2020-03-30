import React, { useState, useEffect } from "react";
import none from "../../assets/0.jpg";
import oneF from "../../assets/1f.jpg";
import twoF from "../../assets/2f.jpg";
import threeF from "../../assets/3f.jpg";
import fourF from "../../assets/4f.jpg";
import fiveF from "../../assets/5f.jpg";
import sixF from "../../assets/6f.jpg";
import sevenF from "../../assets/7f.jpg";
import oneS from "../../assets/1s.jpg";
import twoS from "../../assets/2s.jpg";
import threeS from "../../assets/3s.jpg";
import fourS from "../../assets/4s.jpg";
import fiveS from "../../assets/5s.jpg";
import sixS from "../../assets/6s.jpg";
import sevenS from "../../assets/7s.jpg";

import "./quiz.css";

function Quiz() {
  const [play, setPlay] = useState({
    start: false
  });

  const [timer, setTimer] = useState({
    num: 30
  });

  const scales = [
    "C Major",
    "A Minor",
    "F Major",
    "D Minor",
    "Bb Major",
    "G Minor",
    "Eb Major",
    "C Minor",
    "Ab Major",
    "F Minor",
    "Db Major",
    "Bb Minor",
    "Gb Major",
    "Eb Minor",
    "Cb Major",
    "Ab Minor",
    "G Major",
    "E Minor",
    "D Major",
    "B Minor",
    "A Major",
    "F# Minor",
    "E Major",
    "C# Minor",
    "B Major",
    "G# Minor",
    "F# Major",
    "D# Minor",
    "C# Major",
    "A# Minor"
  ];

  const time = () => {
    setTimer({ num: timer.num - 1 });
  };

  useEffect(() => {
    setTimeout(() => {
      time();
    }, 1000);
  }, [timer.num]);

  const start = () => {
    setPlay({ start: true });
    time();
    // random();
  };

  return play.start === false ? (
    <>
      <p>
        In this section you will be presented with a name of a scale, and you
        have to pick its key signature. You will have 30 seconds to correctly
        name as many scales as you can! When you are ready to start the clock,
        click the button!
      </p>
      <button onClick={start}>READY!</button>
    </>
  ) : play.start === true && timer.num > 0 ? (
    <>
      <div>
        <h2>Time Left: {timer.num} seconds</h2>
      </div>
      <div>
        <button id="btn0"></button>
        <button id="btn1s"></button>
        <button id="btn2s"></button>
        <button id="btn3s"></button>
        <button id="btn4s"></button>
        <button id="btn5s"></button>
        <button id="btn6s"></button>
        <button id="btn7s"></button>
        <button id="btn1f"></button>
        <button id="btn2f"></button>
        <button id="btn3f"></button>
        <button id="btn4f"></button>
        <button id="btn5f"></button>
        <button id="btn6f"></button>
        <button id="btn7f"></button>
      </div>
    </>
  ) : (
    <>
      <h2>TIME'S UP!</h2>
    </>
  );
}

export default Quiz;
