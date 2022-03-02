import ExpenseDate from "../ExpenseDate";
import CardContainer from "../CardContainer";

const ExpenseItem = ({ date, expenseTitle, amount }) => {
  return (
    <li>
      <CardContainer className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item-description">
          <h2>{expenseTitle}</h2>
          <div className="expense-item-price">{amount}</div>
        </div>
      </CardContainer>
    </li>
  );
};

export default ExpenseItem;
