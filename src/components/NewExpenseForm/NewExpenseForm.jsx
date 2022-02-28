import { useState } from "react";

const NewExpenseForm = () => {
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.value.target);
  };

  return (
    <section className="new-expense">
      <form className="new-expense-controls">
        <div className="new-expense-control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense-control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense-control">
          <label>Date</label>
          <input
            type="date"
            min="2000-01-01"
            max="2030-12-31"
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense-action">
          <button type="submit">Add</button>
        </div>
      </form>
    </section>
  );
};

export default NewExpenseForm;
