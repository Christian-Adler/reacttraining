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
  
  // Obwohl show={false} wird auch die Kindkomponente jedes Mal reevaluiert, wenn Parent.
  // Nur die State-Aenderung ist fuer Re-Eval ausschlaggebend. Nicht die Props die nach unten gegeben werden.
  // Der DOM wird nun aber nicht mehr angefasst.
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false}/>
      <Button onClick={toggleParagraphHandler}>ShowParagraph</Button>
    </div>
  );
}

export default App;
