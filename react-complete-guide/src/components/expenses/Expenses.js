import "./Expenses.css";

import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../ui/Card";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const { items } = props;

  const filterChangeHandler = (year) => setFilteredYear(year);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseItem
          title={items[0].title}
          amount={items[0].amount}
          date={items[0].date}
        />
        <ExpenseItem
          title={items[1].title}
          amount={items[1].amount}
          date={items[1].date}
        />
        <ExpenseItem
          title={items[2].title}
          amount={items[2].amount}
          date={items[2].date}
        />
        <ExpenseItem
          title={items[3].title}
          amount={items[3].amount}
          date={items[3].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
