import { useState } from "react";

import ExpenseItem from "../ExpenseItem";
import CardContainer from "../CardContainer";
import DateFilter from "../DateFilter";

const Expenses = ({ expenses }) => {
  const [dateFiltered, setDateFiltered] = useState("");

  const onDateSelectedHandler = (event) => {
    setDateFiltered(event.target.value);
  };

  return (
    <CardContainer className="expenses">
      <DateFilter
        minDate={2000}
        maxDate={2030}
        selectedOption={dateFiltered}
        onChangeHanlder={onDateSelectedHandler}
      />
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expenseTitle={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </CardContainer>
  );
};

export default Expenses;
