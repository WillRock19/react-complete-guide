import { useState } from "react";

import ExpensesData from "./components/ExpensesData";
import NewExpenseForm from "./components/NewExpenseForm";

const initialExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const addExpenseHandler = (newExpense) => {
    setExpenses((previousState) => {
      return [newExpense, ...previousState];
    });
  };

  return (
    <div className="App">
      <h2>Starting...</h2>
      <NewExpenseForm onAddExpense={addExpenseHandler} />
      <ExpensesData expenses={expenses} />
    </div>
  );
}

export default App;
