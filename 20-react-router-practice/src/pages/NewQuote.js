// import {useState} from "react";
// import "./NewQuote.css";
// import classes from "./NewQuote.module.css";

import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = (props) => {
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
  }
  return (<QuoteForm onAddQuote={addQuoteHandler}/>);
};

export default NewQuote;
