import Chart from "../Chart";

const ExpensesChart = ({ expenses }) => {
  const chartData = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "Mai", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dez", value: 0 },
  ];

  const initializedChartData = (expenses) => {
    for (const expense of expenses) {
      const month = expense.date.getMonth();
      chartData[month].value += expense.amount;
    }

    return chartData;
  };

  return <Chart chartData={initializedChartData(expenses)} />;
};

export default ExpensesChart;
