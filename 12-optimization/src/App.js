import React, {useState} from 'react';

import './App.css';
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/demo/DemoOutput";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  
  console.log('App running');
  
  const toggleParagraphHandler = () => {
    setShowParagraph((prevState) => !prevState);
  };
  
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph}/>
      <Button onClick={toggleParagraphHandler}>ShowParagraph</Button>
    </div>
  );
}

export default App;
