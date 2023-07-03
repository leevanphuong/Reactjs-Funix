import React from "react";
import style from "./Button.module.css";
const Button = (props) => {
  return (
    <button className={style.button} onClick={props.click}>
      Add New Expense
    </button>
  );
};

export default Button;
