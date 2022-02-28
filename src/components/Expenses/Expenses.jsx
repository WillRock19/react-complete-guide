import ExpenseItem from "../ExpenseItem";
import CardContainer from "../CardContainer";

const Expenses = ({ expenses }) => {
  return (
    <CardContainer className="expenses">
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </CardContainer>
  );
};

export default Expenses;
