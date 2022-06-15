import "./Expenses.css";

import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../ui/Card";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  const filterChangeHandler = (year) => setFilteredYear(year);

  const { items } = props;
  const filteredItems = items.filter(
    (item) => `${item.date.getFullYear()}` === filteredYear
  );

  let expensesContent = <p>No expenses found</p>;
  if (filteredItems.length > 0)
    expensesContent = filteredItems.map((item) => (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    ));

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
