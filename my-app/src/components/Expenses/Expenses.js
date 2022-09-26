import { useState } from "react";
import ExpenseItem from "../Expenses/ExpenseItem";
import ExpenseFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "../Expenses/Expenses.css";

const Expenses = (props) => {
  const [FilteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={FilteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map(expense =>(<ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>))}
      </Card>
    </div>
  );
};

export default Expenses;
