import ExpenseItem from "../ExpenseItem";

const ExpenseList = ({ items }) => {
  if (!items || items.length === 0) {
    return (
      <section className="expenses-list-empty">
        There are no expenses to be shown!
      </section>
    );
  }

  return (
    <ul className="expenses-list">
      {items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expenseTitle={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
