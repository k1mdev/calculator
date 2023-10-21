import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import LargeButton from './components/LargeButton';
import Output from './components/Output';
import { useRef } from 'react';
import { useState } from 'react';

//span used for className as className would otherwise be interpreted as prop

function App() {

  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [output, setOutput] = useState(0);

  function add(e) {
    e.preventDefault();
    setOutput((output) => output + Number(inputRef.current.value));
  }

  return (
    <div className="outerContainer">
      <span className="display"><Output total="0"/></span>
      <div className="buttons">
        <span className="numButton" id="button7"><Button value="7" /></span>
        <span className="numButton" id="button8"><Button value="8" /></span>
        <span className="numButton" id="button9"><Button value="9" /></span>
        <span className="opButton" id="button/"><Button value="/" /></span>

        <span className="numButton" id="button4"><Button value="4" /></span>
        <span className="numButton" id="button5"><Button value="5" /></span>
        <span className="numButton" id="button6"><Button value="6" /></span>
        <span className="opButton" id="button*"><Button value="*" /></span>

        <span className="numButton" id="button1"><Button value="1" /></span>
        <span className="numButton" id="button2"><Button value="2" /></span>
        <span className="numButton" id="button3"><Button value="3" /></span>
        <span className="opButton" id="button-"><Button value="-" /></span>

        <span className="numButton" id="button0"><Button value="0" /></span>
        <span className="numButton" id="button."><LargeButton value="." /></span>
        <span className="opButton" id="button+"><Button value="+" /></span>

        <span className="opButton" id="buttonC"><LargeButton value="C" /></span>
        <span className="opButton" id="buttonEnter"><LargeButton value="Enter" /></span>    

      </div>
    </div>
  );
}

export default App;
  