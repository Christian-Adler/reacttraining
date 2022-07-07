// import {useState} from "react";
// import "./NewQuote.css";
// import classes from "./NewQuote.module.css";

import QuoteForm from "../components/quotes/QuoteForm";
import {useHistory} from "react-router-dom";
import useHttp from "../hooks/use-http";
import {addQuote} from "../lib/api";
import {useEffect} from "react";

const NewQuote = (props) => {
  const history = useHistory();
  const { sendRequest, status } = useHttp(addQuote);
  
  useEffect(() => {
    if (status === 'completed')
      history.push('/quotes')
  }, [status, history]);
  
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
    sendRequest(quoteData);
    //history.push('/quotes'); -> in useEffect
  }
  return (<QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler}/>);
};

export default NewQuote;
