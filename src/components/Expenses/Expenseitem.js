import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
const Expenseitem = (props) => {
  const [title, setTitle] = useState(props.title);
  const HandleClick = () => {
    setTitle("update!");
  };
  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-desc">
        <h2>{title}</h2>
        <div className="expense-price">${props.amount}</div>
        <button onClick={HandleClick}>Update!</button>
      </div>
    </Card>
  );
};

export default Expenseitem;
