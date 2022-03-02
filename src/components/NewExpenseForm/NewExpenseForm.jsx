import { useState } from "react";

const initializedForm = () => {
  return {
    amount: "",
    date: "",
    title: "",
  };
};

const NewExpenseForm = ({ onAddExpense }) => {
  const [formData, setFormData] = useState(initializedForm);
  const [formClosed, setFormClosed] = useState(true);

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
        date: event.target.value,
      };
    });
  };

  const resetForm = () => {
    setFormClosed(true);
    setFormData(initializedForm);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const newData = {
      title: formData.title,
      amount: formData.amount,
      date: new Date(formData.date),
    };

    resetForm();
    onAddExpense(newData);
  };

  const newExpenseHandler = (event) => {
    event.preventDefault();
    setFormClosed(false);
  };

  const cancelNewExpenseHandler = (event) => {
    event.preventDefault();
    resetForm();
  };

  return (
    <section className="new-expense">
      {formClosed ? (
        <button onClick={newExpenseHandler}>Add new expense</button>
      ) : (
        <form className="new-expense-controls" onSubmit={onSubmitHandler}>
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
              min="2018-01-01"
              max="2023-12-31"
              value={formData.date}
              onChange={dateChangeHandler}
              className={formData.date ? "" : "empty-date"}
            />
          </div>
          <div className="new-expense-action">
            <button onClick={cancelNewExpenseHandler}>Cancel</button>
            <button type="submit">Add</button>
          </div>
        </form>
      )}
    </section>
  );
};

export default NewExpenseForm;
