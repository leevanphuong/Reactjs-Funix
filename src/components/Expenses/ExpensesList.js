import React from "react";
import Expenseitem from "./Expenseitem";
const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((item, index) => (
        <Expenseitem
          title={item.title}
          amount={item.amount}
          date={item.date}
          key={index++}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
