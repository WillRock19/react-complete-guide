import { useState } from "react";

const initializedForm = () => {
  return {
    amount: "",
    date: "",
    title: "",
  };
};

const NewExpenseForm = () => {
  const [formData, setFormData] = useState(initializedForm);

  const titleChangeHandler = (event) => {
    // This way react guarantees that the state it will use to be updated will be the latest one (in the previous way, since react updates the states asynchronously,
    // we might end up with a bad state).
    /* Previous way:

        setFormData({
          ...formData,
          title: event.target.value
        });
    */

    setFormData((previousState) => {
      return {
        ...previousState,
        title: event.target.value,
      };
    });
  };

  const amountChangeHandler = (event) => {
    setFormData((previousState) => {
      return {
        ...previousState,
        amount: event.target.value,
      };
    });
  };

  const dateChangeHandler = (event) => {
    setFormData((previousState) => {
      return {
        ...previousState,
        date: event.value.target,
      };
    });
  };

  return (
    <section className="new-expense">
      <form className="new-expense-controls">
        <div className="new-expense-control">
          <label>Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense-control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={formData.amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense-control">
          <label>Date</label>
          <input
            type="date"
            min="2000-01-01"
            max="2030-12-31"
            value={formData.date}
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
