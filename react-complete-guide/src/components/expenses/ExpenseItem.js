import './ExpenseItem.css'
import {useState} from 'react';

import Card from '../ui/Card'
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title); // useState-ReactHook
  
  
  const clickHandler = () => {
    setTitle('Updated :)');
    console.log(title); // Title ist hier direkt danach noch das alte value!
  };
  
  
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">€{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
