import './ExpenseItem.css'

function ExpenseItem() {
  const expenseDate = new Date(2022, 0, 1);
  const expenseTitle = 'Car insurance';
  const expendsAmount = 249.45;
  
  return (
    <div className="expense-item">
      <div>{expenseDate.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">€{expendsAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
