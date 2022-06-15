import './ExpenseItem.css'

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>15.06.2022</div>
      <div className="expense-item__description">
        <h2>Car ins</h2>
        <div className="expense-item__price">€235,54</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
