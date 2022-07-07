// import {useState} from "react";
// import "./QuoteDetail.css";
// import classes from "./QuoteDetail.module.css";

import {Link, Redirect, Route, useParams, useRouteMatch} from "react-router-dom";
import {Fragment} from "react";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";


const DUMMY_QUTOES = [
  { id: 'q1', author: 'Auth', text: "lerning is fun" },
  { id: 'q2', author: 'Auth1', text: "learning is fun" },
  { id: 'q3', author: 'Auth3', text: "learning is funny" },
]


const QuoteDetail = (props) => {
  const params = useParams();
  const quote = DUMMY_QUTOES.find(quote => quote.id === params.quoteid);
  const match = useRouteMatch(); // Match bezieht sich auf den Match, der hierher gefuehrt hat.
  // /comments kommt daher nicht darin vor weil in App.js <Route path="/quotes/:quoteid"> hierher fuehrt
  console.log(match); // {url, path, params}
  
  if (!quote) {
    return <Redirect to="/404"/>
    //return <p>No quote found!</p>
  }
  
  
  return (<Fragment>
    <HighlightedQuote text={quote.text} author={quote.author}/>
    <Route path={`${match.path}`} exact>
      <div className="centered">
        <Link className="btn--flat" to={`${match.url}/comments`}>Show comments</Link>
      </div>
    </Route>
    <Route path={`${match.path}/comments`}>
      <div className="centered">
        <Link className="btn--flat" to={`${match.url}`}>Hide comments</Link>
      </div>
      <Comments/>
    </Route>
  
  </Fragment>);
};

export default QuoteDetail;
