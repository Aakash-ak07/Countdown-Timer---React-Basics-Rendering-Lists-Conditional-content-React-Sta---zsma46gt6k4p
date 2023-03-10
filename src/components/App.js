import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
  const[counter, setCounter] = useState(0);
  
  var changeColor = (e) => {
    if(e.key === 'Enter'){
      if(isNaN(e.target.value) || e.target.value === '') {
        setCounter(0);
      } 
      else {
        setCounter(parseInt(e.target.value));
      }
    }
  }

  useEffect(() => {
    const i = setInterval(() => {
      if (counter === 0) {
        setCounter(0);
      }
      if (counter !== 0) {
        setCounter(counter - 1);
      }
    }, 1000);

    return () => {
      clearInterval(i);
    };
  }, [counter]);


  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" onKeyDown={changeColor} /> sec.
        </h1>
      </div>
      <div id="current-time">{counter}</div>
    </div>
  )
}


export default App;
