import { useState } from "react";

import DateFilter from "../DateFilter";
import CardContainer from "../CardContainer";
import ExpenseItem from "../ExpenseItem";
import ExpenseList from "../ExpenseList";

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
      <ExpenseList items={filteredList} />
    </CardContainer>
  );
};

export default Expenses;
