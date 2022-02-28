import ExpenseItem from "../ExpenseItem";

const Expenses = ({ expenses }) => {
  return (
    <section className="expenses">
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </section>
  );
};

export default Expenses;
