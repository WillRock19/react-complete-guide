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
    <>
      <DateFilter
        minDate={2000}
        maxDate={2030}
        selectedOption={dateFiltered}
        onChangeHanlder={onDateSelectedHandler}
      />
      <CardContainer className="expenses">
        {expenses.map((expense) => {
          return (
            <ExpenseItem
              expensetitle={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })}
      </CardContainer>
    </>
  );
};

export default Expenses;
