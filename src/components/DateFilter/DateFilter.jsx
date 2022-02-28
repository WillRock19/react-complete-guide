const allYearsBetween = (minDate, maxDate) => {
  let years = [];

  for (let currentDate = minDate; currentDate <= maxDate; currentDate++) {
    years.push(currentDate);
  }

  return years;
};

const DateFilter = ({ minDate, maxDate, selectedOption, onChangeHanlder }) => {
  return (
    <section className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={selectedOption} onChange={onChangeHanlder}>
          {allYearsBetween(minDate, maxDate).map((year) => {
            return <option value={year.toString()}>{year}</option>;
          })}
        </select>
      </div>
    </section>
  );
};

export default DateFilter;
