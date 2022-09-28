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

  const filteredExpenses = props.items.filter(expense=>{
    return expense.date.getFullYear().toString() === FilteredYear
  })
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={FilteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
