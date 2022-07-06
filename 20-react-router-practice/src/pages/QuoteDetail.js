// import {useState} from "react";
// import "./QuoteDetail.css";
// import classes from "./QuoteDetail.module.css";

import {Route, useParams} from "react-router-dom";
import {Fragment} from "react";
import Comments from "../components/comments/Comments";

const QuoteDetail = (props) => {
  const params = useParams();
  return (<Fragment>
    <h1>Quote Detail</h1>
    <p>{params.quoteid}</p>
    <Route path={`/quotes/${params.quoteid}/comments`}>
      <Comments/>
    </Route>
  
  </Fragment>);
};

export default QuoteDetail;
