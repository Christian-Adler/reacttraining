import React, {useCallback, useState} from 'react';

import './App.css';
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/demo/DemoOutput";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  
  console.log('App running');
  
  //useCallback - allow to store a function across component executions
  // => memo() comparisson then works -> same (not equal) function
  
  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevState) => !prevState);
    }
  }, [allowToggle]);
  
  const allowToggleHandler = () => {
    setAllowToggle(true);
  }
  
  // Obwohl show={false} wird auch die Kindkomponente jedes Mal reevaluiert, wenn Parent.
  // Nur die State-Aenderung ist fuer Re-Eval ausschlaggebend. Nicht die Props die nach unten gegeben werden.
  // Der DOM wird nun aber nicht mehr angefasst.
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph}/>
      <Button onClick={allowToggleHandler}>Allow toggeling</Button>
      <Button onClick={toggleParagraphHandler}>ShowParagraph</Button>
    </div>
  );
}

export default App;
