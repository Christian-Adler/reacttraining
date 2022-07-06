// import {useState} from "react";
// import "./QuoteDetail.css";
// import classes from "./QuoteDetail.module.css";

import {Redirect, Route, useParams} from "react-router-dom";
import {Fragment} from "react";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";


const DUMMY_QUTOES = [
  { id: 'q1', aothor: 'Auth', text: "lerning is fun" },
  { id: 'q2', aothor: 'Auth1', text: "learning is fun" },
  { id: 'q3', aothor: 'Auth3', text: "learning is funny" },
]


const QuoteDetail = (props) => {
  const params = useParams();
  const quote = DUMMY_QUTOES.find(quote => quote.id === params.quoteid);
  
  if (!quote) {
    return <Redirect to="/404"/>
    //return <p>No quote found!</p>
  }
  
  return (<Fragment>
    <HighlightedQuote text={quote.text} author={quote.aothor}/>
    <Route path={`/quotes/${params.quoteid}/comments`}>
      <Comments/>
    </Route>
  
  </Fragment>);
};

export default QuoteDetail;
