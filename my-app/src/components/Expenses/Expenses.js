import { useState } from "react";
import ExpenseFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "../Expenses/Expenses.css";
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

const Expenses = (props) => {
  const [FilteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === FilteredYear;
  });

  

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={FilteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
