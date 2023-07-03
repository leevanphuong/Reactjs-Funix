import React, { useState } from "react";
import Button from "../UI/Button";
const ExpenseForm = (props) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    props.onSave(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
    setIsFormVisible(false);
  };

  const showForm = () => {
    setIsFormVisible(true);
  };

  return (
    <div>
      {!isFormVisible && <Button click={showForm} />}
      {isFormVisible && (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={handleTitleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Amount</label>
            <input
              type="number"
              className="form-control"
              min="0.01"
              step="0.01"
              value={amount}
              onChange={handleAmountChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Date</label>
            <input
              type="date"
              className="form-control"
              min="2019-01-01"
              max="2022-12-31"
              value={date}
              onChange={handleDateChange}
            />
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      )}
    </div>
  );
};

export default ExpenseForm;
