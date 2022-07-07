// import {useState} from "react";
// import "./AllQuotes.css";
// import classes from "./AllQuotes.module.css";

import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUTOES = [
  { id: 'q1', author: 'Auth', text: "lerning is fun" },
  { id: 'q2', author: 'Auth1', text: "learning is fun" },
  { id: 'q3', author: 'Auth3', text: "learning is funny" },
]

const AllQuotes = (props) => {
  return (<QuoteList quotes={DUMMY_QUTOES}/>);
};

export default AllQuotes;
