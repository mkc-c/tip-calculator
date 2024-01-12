import { useState } from "react";

function PercentageInput({ children, options }) {
  const [percentage, setPercentage] = useState(options[0].value);

  const handleChange = (event) => {
    setPercentage(event.target.value);
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
      <select value={percentage} onChange={handleChange}>
        {renderedOptions}
      </select>
    </div>
  );
}

export default PercentageInput;
