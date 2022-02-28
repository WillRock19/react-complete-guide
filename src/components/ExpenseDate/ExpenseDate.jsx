const ExpenseDate = ({ date }) => {
  const dayFormatted = date.toLocaleString("en-US", { day: "2-digit" });
  const monthFormatted = date.toLocaleString("en-US", { month: "long" });
  const yearFormatted = date.getFullYear();

  return (
    <section className="expense-date">
      <div className="expense-month">{monthFormatted}</div>
      <div className="expense-day">{dayFormatted}</div>
      <div className="expense-year">{yearFormatted}</div>
    </section>
  );
};

export default ExpenseDate;
