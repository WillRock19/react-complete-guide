import ExpenseDate from "../ExpenseDate";

const ExpenseItem = ({ date, title, amount }) => {
  return (
    <section className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item-description">
        <h2>{title}</h2>
        <div className="expense-item-price">{amount}</div>
      </div>
    </section>
  );
};

export default ExpenseItem;
