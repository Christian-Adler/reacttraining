// import {useState} from "react";
// import "./QuoteDetail.css";
// import classes from "./QuoteDetail.module.css";

import {Link, Redirect, Route, useParams, useRouteMatch} from "react-router-dom";
import {Fragment, useEffect} from "react";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import {getSingleQuote} from "../lib/api";
import LoadingSpinner from "../components/ui/LoadingSpinner";


const QuoteDetail = (props) => {
  const params = useParams();
  const { quoteId } = params;
  
  const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true);
  
  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);
  
  const match = useRouteMatch(); // Match bezieht sich auf den Match, der hierher gefuehrt hat.
  // /comments kommt daher nicht darin vor weil in App.js <Route path="/quotes/:quoteId"> hierher fuehrt
  console.log(match); // {url, path, params}
  
  if (status === 'pending') {
    return <div className="centered"><LoadingSpinner/></div>;
  }
  
  if (error) {
    return <p className="centered">{error}</p>;
  }
  
  if (status === 'completed' && (!loadedQuote.text)) {
    // return <p className="centered">No quote found</p>;
    return <Redirect to="/404?err=404"/>
  }
  
  return (<Fragment>
    <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author}/>
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
