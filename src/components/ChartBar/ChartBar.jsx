const calculateBarFillHeight = (currentValue, maxValueFromData) => {
  if (maxValueFromData === 0) return "0%";

  const currentValuePercentage = (currentValue * 100) / maxValueFromData;
  const currentValuePercentageAsString = `${Math.round(
    currentValuePercentage
  ).toString()}%`;

  return currentValuePercentageAsString;
};

const ChartBar = ({ label, value, maxValueFromData }) => {
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: calculateBarFillHeight(value, maxValueFromData) }}
        />
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
