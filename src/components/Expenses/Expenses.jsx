import { useState } from "react";

import ExpenseItem from "../ExpenseItem";
import CardContainer from "../CardContainer";
import DateFilter from "../DateFilter";

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("");

  const onYearSelectedHandler = (event) => {
    setFilteredYear(event.target.value);
  };

  const filteredList = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <CardContainer className="expenses">
      <DateFilter
        minDate={2018}
        maxDate={2023}
        selectedOption={filteredYear}
        onChangeHanlder={onYearSelectedHandler}
      />
      {filteredList.map((expense) => (
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
