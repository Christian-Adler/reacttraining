import './ExpenseForm.css'
import {useState} from 'react';


const ExpenseForm = (props) => {
  console.log('ExpenseForm');
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const onTitleChange = (event) => {
    setEnteredTitle(event.target.value);
  };
  const onAmountChange = (event) => {
    setEnteredAmount(event.target.value);
  };
  const onDateChange = (event) => {
    setEnteredDate(event.target.value);
  };
  
  const onSubmit = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };
    
    console.log(expenseData);
  };
  
  return <form onSubmit={onSubmit}>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Titel{enteredTitle}</label>
        <input type="text" onChange={onTitleChange} value={enteredTitle}/>
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input type="number" min="0.01" step="0.01" onChange={onDateChange}/>
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input type="date" min="2019-01-01" max="2022-12-31" onChange={onAmountChange}/>
      </div>
    </div>
    <div className="new-expense__actions">
      <button type="submit">Add Expense</button>
    </div>
  </form>;
}
export default ExpenseForm;
