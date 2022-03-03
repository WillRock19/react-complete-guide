import ChartBar from "../ChartBar";

const calculateMaxValue = (chartData) => {
  const allValues = chartData.map((data) => data.value);
  return Math.max(...allValues);
};

const Chart = ({ chartData }) => {
  return (
    <section className="chart">
      {chartData.map((data) => (
        <ChartBar
          key={data.label}
          value={data.value}
          label={data.label}
          maxValueFromData={calculateMaxValue(chartData)}
        />
      ))}
    </section>
  );
};

export default Chart;
