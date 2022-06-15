import './ExpenseForm.css'
import {useState} from 'react';


const ExpenseForm = () => {
  const [userInput, setUserInput] = useState({ enteredTitle: '', enteredAmount: '', enteredDate: '' });
  
  console.log(userInput);
  
  const onTitleChange = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value }
    });
  };
  
  const onAmountChange = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value }
    });
  };
  const onDateChange = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value }
    });
  };
  
  return <form>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Titel</label>
        <input type="text" onChange={onTitleChange} value={userInput.enteredTitle}/>
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
