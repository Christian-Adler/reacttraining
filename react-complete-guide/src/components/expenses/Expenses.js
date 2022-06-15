import "./Expenses.css";

import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../ui/Card";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const { items } = props;
  const filteredItems = items.filter(
    (item) => `${item.date.getFullYear()}` === filteredYear
  );

  const filterChangeHandler = (year) => setFilteredYear(year);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {filteredItems.length === 0 ? (
          <p>No expenses found</p>
        ) : (
          filteredItems.map((item) => (
            <ExpenseItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          ))
        )}
      </Card>
    </div>
  );
};

export default Expenses;
