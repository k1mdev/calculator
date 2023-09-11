import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import LargeButton from './components/LargeButton';

function App() {
  return (
    <div className="outerContainer">
      <div className="numButtons">
        <LargeButton value="0" />
        <Button value="." />
        <Button value="1" />
        <Button value="2" />
        <Button value="3" />
        <Button value="4" />
        <Button value="5" />
        <Button value="6" />
        <Button value="7" />
        <Button value="8" />
        <Button value="9" />
      </div>
    </div>
  );
}

export default App;
  