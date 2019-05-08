import React, { Component } from "react";
import "./Wishes.css";

const Wishes = () => {
  return(
  <div>
    <link href='https://fonts.googleapis.com/css?family=Quicksand' rel='stylesheet' type='text/css'/>
    <div id="typewriter">
      <div id="platen">
        <div id="carriage-lever">
        </div>
        <div id="platen-knob-right"></div>
        <div id="platen-knob-left"></div>
      </div>
      <div id="paper">
        <div id="note">{"Happy Birthday Tarak Anna..! Love you..! 🎂🎉😊🎊"}</div>
      </div>
      <div id="body">
        <div id="top"></div>
        <div id="opening">
          <div id="internal-shadow"></div>
          <div id="internal-hollow"></div>
          <div id="internal-board-crop">
            <div id="internal-board"></div>
          </div>
        </div>
        <div id="internal-board2-crop">
          <div id="internal-board2"></div>
        </div>
        <div id="cutaway"></div>
        <div id="front">
          <div id="keyboard"></div>
          <div id="keys"></div>
        </div>
      </div>
    </div>
    <div id="credit" style={{fontSize: "5px"}}><a href="https://dribbble.com/shots/1473232-Red-Typewriter"></a></div>
  </div>
  );
}

export default Wishes;
