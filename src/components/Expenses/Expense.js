import React, { useState } from "react";
import Expenseitem from "./Expenseitem";
import ExpensesList from "./ExpensesList";
import ExpenseFilter from "../NewExpense/ExpenseFilter";
import ExpenseChart from "./ExpenseChart";
const Expense = (props) => {
  const [filter, setFilter] = useState("2020");
  const filterChange = (selectYear) => {
    setFilter(selectYear);
  };
  const filterYear = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filter;
  });
  return (
    <div className="expenses">
      <ExpenseFilter selected={filter} onChangFilter={filterChange} />
      <ExpenseChart expenses={filterYear} />
      <ExpensesList items={filterYear} />
    </div>
  );
};

export default Expense;
