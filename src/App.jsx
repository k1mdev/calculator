import logo from './logo.svg';
import React from 'react';
import './App.css';
import { useRef } from 'react';
import { useState } from 'react';

//span used for className as className would otherwise be interpreted as prop

function App() {

  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [output, setOutput] = useState(0);

  function putNum(e) {
    e.preventDefault();
    if (output == 0) {
      setOutput(e.target.value);
    }
    else {
      setOutput((output) => output + e.target.value);
    }
  }

  function putOp(e) {
    e.preventDefault();        
    const finalChar = String(output).charAt(output.length - 1);
    // " " since operator values are padded with spaces
    let lastIsOp = (finalChar == " " || finalChar == ".");
    if (!lastIsOp) {
      setOutput((output) => output + e.target.value);  
    }
  }

  function putDot(e) {
    e.preventDefault();
    let hasDot = false;
    for (const char of String(output)) {
      if (char == ".") {
        hasDot = true;
        break;
      }
    }
    if (!hasDot) {
      setOutput((output) => output + e.target.value);
    }
  }

  function reset(e) { 
    e.preventDefault(); 
    setOutput(0); 
  };

  function calc(e) {
    e.preventDefault();
    try {
      setOutput(eval(output).toFixed(2));
    }
    catch {

    }
  }

  return (
    <div className="centerContents">
      <div className="outerBorder">
        <textarea className="display" value={output} readOnly></textarea>
        <div className="buttons">
          <button className="numButton" id="button7" value="7" onClick={putNum}>7</button>
          <button className="numButton" id="button8" value="8" onClick={putNum}>8</button>
          <button className="numButton" id="button9" value="9" onClick={putNum}>9</button>
          <button className="opButton" id="button/" value=" / " onClick={putOp}>/</button>

          <button className="numButton" id="button4" value="4" onClick={putNum}>4</button>
          <button className="numButton" id="button5" value="5" onClick={putNum}>5</button>
          <button className="numButton" id="button6" value="6" onClick={putNum}>6</button>
          <button className="opButton" id="button*" value=" * " onClick={putOp}>*</button>

          <button className="numButton" id="button1" value="1" onClick={putNum}>1</button>
          <button className="numButton" id="button2" value="2" onClick={putNum}>2</button>
          <button className="numButton" id="button3" value="3" onClick={putNum}>3</button>
          <button className="opButton" id="button-" value=" - " onClick={putOp}>-</button>

          <button className="numButton" id="button0" value="0" onClick={putNum}>0</button>
          <button className="numButton" id="button." value="." onClick={putDot}>.</button>
          <button className="opButton" id="buttonC" value="C" onClick={reset}>C</button>

          <button className="opButton" id="button+" value=" + " onClick={putOp}>+</button>
          <button className="opButton" id="buttonEnter" value="Enter" onClick={calc}>Enter</button>  

        </div>
      </div>
    </div>
  );
}

export default App;
  