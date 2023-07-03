import React from "react";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const saveExpen = (enter) => {
    const expenseData = {
      ...enter,
      id: Math.random().toString(),
    };
    props.onAdd(expenseData);
  };
  return (
    <div>
      <ExpenseForm none={'none'} onSave={saveExpen} />
    </div>
  );
};

export default NewExpense;
