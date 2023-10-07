import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
// import LargeButton from './components/LargeButton';
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
      <span className="display"><Output /></span>
      <div className="buttons">
        <span className="button0"><Button value="0" /></span>
        <span className="button."><Button value="." /></span>
        <span className="buttonEnter"><Button value="Enter" /></span>    
        <span className="button1"><Button value="1" /></span>
        <span className="button2"><Button value="2" /></span>
        <span className="button3"><Button value="3" /></span>
        <span className="button4"><Button value="4" /></span>
        <span className="button5"><Button value="5" /></span>
        <span className="button6"><Button value="6" /></span>
        <span className="button+"><Button value="+" /></span>
        <span className="button7"><Button value="7" /></span>
        <span className="button8"><Button value="8" /></span>
        <span className="button9"><Button value="9" /></span>
        <span className="buttonC"><Button value="C" /></span>
        <span className="button/"><Button value="/" /></span>
        <span className="button*"><Button value="*" /></span>
        <span className="button-"><Button value="-" /></span>
      </div>
    </div>
  );
}

export default App;
  