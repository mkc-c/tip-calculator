function PercentageInput({
  children,
  options,
  percentage,
  onPercentageChange,
}) {
  const person = Object.keys(percentage);

  const handleChange = (event) => {
    onPercentageChange(Number(event.target.value), person);
  };

  const renderedOptions = options.map((option, index) => {
    return (
      <option key={index} value={option.value}>
        {option.label}
      </option>
    );
  });

  return (
    <div>
      <label>{children}</label>
      <select value={percentage[person]} onChange={handleChange}>
        {renderedOptions}
      </select>
    </div>
  );
}

export default PercentageInput;
